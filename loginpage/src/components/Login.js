import React, {useState}  from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import "./login.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';



const useStyles=makeStyles((theme) => ({
    large: {
        width: theme.spacing(3),
        height: theme.spacing(3),
       
      }
})
)



const Login=() => {
    //console.log({handleChange})
    
    const history = useHistory();
    const [user, setUser] = useState({
        email:"",password:""
    });
    
      let name,value;
    
        const handleInputs = (e) => {
            console.log(e);
            name = e.target.name;
            value = e.target.value;
            setUser( {...user, [name]:value})
        }



    const loginUser = async (e) =>{
        // console.log(loginUser)
        e.preventDefault();
        const { email,password } = user;
        const res = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });
        console.log("res", res);
        const data =await  res.json();
        console.log(data);
       

        if(res.status === 400 || !data ) {
            window.alert("Invalid Credentials");
        }else{
           
            window.alert("Login Successfull");
            // userData(res.data)
            localStorage.setItem('login',JSON.stringify(data));
           
            history.push("/home");
        }
    }

    const paperStyle = { padding: 20,  width: 340, margin: "80px auto", fontSize:"30px","border": "solid", "borderRadius":"15px" }
    const avatarStyle = { backgroundColor: "green", fontSize: "large" }
    //const textField = {fontSize:"40px"}
    const btnstyle = {margin:"8px 0px",fontSize: "medium"}
    const classes = useStyles();
    return ( 
        <Grid>
            <Paper  style={paperStyle} >
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon className={classes.large} /></Avatar>
                    <h2 style={{ color: "black" }}>Sign In</h2>
                </Grid>
                <TextField label="Username" 
                            id="username" 
                            name="email"
                            //style={textField} 
                            placeholder="Enter Your Email" 
                            value={user.email}
                            onChange={handleInputs}
                            fullWidth 
                            required 
                            inputProps={{style: {fontSize: 20,padding:10}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 25}}} // font size of input label
                            /><br />
                <TextField label="Password" 
                            id="password"  
                            placeholder="Enter password" 
                            type="password" 
                            name="password"
                            value={user.password}
                            onChange={handleInputs}
                            fullWidth 
                            required 
                            inputProps={{style: {fontSize: 20,padding:10}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 25 }}} // font size of input label
                            />
                <FormControlLabel
                    control={
                        <Checkbox
                           
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember Me"
                />
                <Button type="submit" 
                        color="primary" 
                        variant="contained" 
                        style={btnstyle} 
                        value="Log In" 
                        onClick={loginUser}
                        fullWidth>
                        Sign In 
                </Button>
                {/* <Typography style={{fontSize:"1.4rem"}}>
                    <Link href="#">
                       Forget Password ?
                    </Link>
                </Typography> */}
                <Typography style={{fontSize:"1.4rem"}}>Don't you have an account ?
                    <Link href="/register" >
                      Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;
