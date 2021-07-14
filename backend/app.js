const dotenv = require('dotenv');
const express =require('express');

const app = express();

dotenv.config({ path: './config.env'})
require('./db/conn');

app.use(express.json());
// const User = require('./model/userSchema'); //
app.use(require('./router/auth'));
const PORT = process.env.PORT;
 
// app.get('/home',(req, res) => {
//     res.cookie("jwtoken", "karthik");
//     res.send("hello from home page");
// })


//Middleware

// const middleware =(req, res, next) =>{
//     console.log("hello i m middleware");
//     next();
// }
// app.get('/' , (req, res) => {
//     res.send("the server is running at app.js");
// });


// app.get('/home' , (req, res) => {
//     console.log("hello from home");
//     res.send("hello home page");
// });

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})