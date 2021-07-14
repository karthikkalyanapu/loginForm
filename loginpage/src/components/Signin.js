// import React, {useState}  from 'react';
// import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles} from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import "./login.css";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import { useHistory } from 'react-router-dom';


// const useStyles=makeStyles((theme) => ({
//     large: {
//         width: theme.spacing(3),
//         height: theme.spacing(3),
       
//       }
// })
// )



// const Signin=({handleChange}) => {
//     //console.log({handleChange})
    
//     const history = useHistory();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const loginUser = async (e) =>{
//         console.log(loginUser)
//         e.preventDefault();

//         const res = await fetch('/signin',{
//             method:"POST",
//             headers:{
//                 "Content-Type" : "application/json"
//             },
//             body:JSON.stringify({
//                 email,
//                 password
//             })
//         });
//         console.log("res", res);
//         const data = res.json();
       

//         if(res.status === 400 || !data ) {
//             window.alert("Invalid Credentials");
//         }else{

//             window.alert("Login Successfull");
//             history.push("/");
//         }
//     }

//     const paperStyle = { padding: 20, height: "70vh", width: 340, margin: "0px auto", fontSize:"30px" }
//     const avatarStyle = { backgroundColor: "green", fontSize: "large" }
//     //const textField = {fontSize:"40px"}
//     const btnstyle = {margin:"8px 0px",fontSize: "medium"}
//     const classes = useStyles();
//     return ( 
//         <Grid>
//             <Paper  style={paperStyle} >
//                 <Grid align="center">
//                     <Avatar style={avatarStyle}><LockOutlinedIcon className={classes.large} /></Avatar>
//                     <h2 style={{ color: "black" }}>Sign In</h2>
//                 </Grid>
//                 <TextField label="Username" 
//                             id="username" 
//                             //style={textField} 
//                             placeholder="Enter Your Email" 
//                             value={email}
//                             onChange={(e)=> setEmail(e.target.value)}
//                             fullWidth 
//                             required 
//                             inputProps={{style: {fontSize: 20,padding:10}}} // font size of input text
//                             InputLabelProps={{style: {fontSize: 25}}} // font size of input label
//                             /><br />
//                 <TextField label="Password" 
//                             id="password"  
//                             placeholder="Enter password" 
//                             type="password" 
//                             value={password}
//                             onChange={(e)=> setPassword(e.target.value)}
//                             fullWidth 
//                             required 
//                             inputProps={{style: {fontSize: 20,padding:10}}} // font size of input text
//                             InputLabelProps={{style: {fontSize: 25 }}} // font size of input label
//                             />
//                 <FormControlLabel
//                     control={
//                         <Checkbox
                           
//                             name="checkedB"
//                             color="primary"
//                         />
//                     }
//                     label="Remember Me"
//                 />
//                 <Button type="submit" 
//                         color="primary" 
//                         variant="contained" 
//                         style={btnstyle} 
//                         value="Log In" 
//                         onClick={loginUser}
//                         fullWidth>
//                         Sign In 
//                 </Button>
//                 <Typography style={{fontSize:"1.4rem"}}>
//                     <Link href="#">
//                        Forget Password ?
//                     </Link>
//                 </Typography>
//                 <Typography style={{fontSize:"1.4rem"}}>Don't you have an account ?
//                     <Link href="/signin" onClick={()=> handleChange("event",1)}>
//                       Sign up
//                     </Link>
//                 </Typography>
//             </Paper>
//         </Grid>
//     )
// }

// export default Signin;
