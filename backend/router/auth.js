const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate")

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    if(!req.user) return res.status(401).json( {success : false, message: "invalid user"})
    res.send("the server is running at auth.js"+ req.user.name);
});

router.post('/register', (req, res) => {

    const { firstname, lastname, email, phoneNo, password } = req.body;

    if (!firstname || !lastname || !phoneNo || !email || !password) {
        return res.status(422).json({ error: "Plz fill the form" })
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "Email already exist" });
            }

            const user = new User({ firstname, lastname, email, phoneNo, password });

            user.save().then(() => {
                console.log(user)
                res.status(201).json({ user, message: "user registered successfully" });
            }).catch((err) =>
                res.status(500).json({ error: "Failed to register" })
            );
        }).catch(err => { console.log(err); });

});
//login route


router.post('/login', async (req, res) => {
    try {
        let token;
        const { email, password} = req.body;
        console.log(req.body)

        if (!email || !password ) {
            return res.status(400).json({ error: "plz fill the data" });
        }

        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

             token = await userLogin.generateAuthToken();
               
            // console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ message: "user error" });

            } else {
                console.log('Inside Else');
                User.findOneAndUpdate({ email: email }, {loginCounter: (userLogin.loginCounter||0) + 1}, {upsert: true}, function(err, doc){
                    if(err){ console.log('Failed to update login counter. Msg: ', err); }
                    else {
                        console.log('Successful Login Counter');
                        console.log(doc.loginCounter);
                    }
                })
                res.json({ "token": token , "user": userLogin});

            }
        } else {
            res.status(400).json({ message: "user error" });
        }
    } catch (err) {
        console.log(err);
    }

});

//home page
router.get('/home', authenticate, (req, res) => {
    console.log("hello from home");
    res.send(req.rootUser);
});



module.exports = router;