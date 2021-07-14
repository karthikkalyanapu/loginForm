import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {MuiPickersUtilsProvider ,KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(4),
        height: theme.spacing(4),

    },
})
)

function Signup() {
    const history= useHistory();
    const [user, setUser] = useState({
        firstname:"", lastname:"",gender:"",email:"",password:"",selectedDate:"",phoneNo:"",check:""
    });
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [gender, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
      };


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
        let name,value;
    
        const handleInputs = (e) => {
            console.log(e);
            name = e.target.name;
            value = e.target.value;
            setUser( {...user, [name]:value})
        }




        const PostData = async (e) => {
            e.preventDefault();
            const { firstname, lastname,email,password,phoneNo } = user;
             const res = await fetch("/register" , {
                 method: "POST",
                 headers: {
                     "Content-Type" : "application/json",
                 },
                 body: JSON.stringify({
                    firstname, lastname,email,password,phoneNo
                 })
             });
             console.log("res", res.status);
             const data = await res.json();
                   console.log(data);
            if(res.status === 422 || !data) {
                window.alert(data.error);
                console.log(data.error);
            }else{
                
            window.alert(" Registration  successfull");
                console.log("Successfull Registration");
                localStorage.setItem('username',JSON.stringify(data));
                history.push("/login");
            }
     
        };

 
const paperStyle = { padding: '18px 18px', width: 337, height: "85%", margin: "40px auto" ,"border":"groove","borderRadius":"10px"}
    const avatarStyle = { backgroundColor: "green", fontSize: "small" }
    const btnstyle = { margin: "15px 0px", fontSize: "small" }
    const margTop = {marginTop:5}

    const classes = useStyles();
    return (

        <div>
            <Grid align="center">
                <Paper style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineIcon className={classes.large} />
                        </Avatar>
                        <h2 style={{marginTop:"0px"}}>Sign Up</h2>
                        <Typography style={{ fontSize: "1.4rem" }}>Please fill the form to create an account !</Typography>
                    </Grid>
                    <form  method="POST" style={{display:"grid"}}>
                        <TextField
                            fullWidth
                            name="firstname"
                            value={user.firstname}
                            onChange={handleInputs}
                            label="First Name"
                            placeholder="Enter your Name"
                            required
                            inputProps={{ style: { fontSize: 15, padding: 5 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        >
                        </TextField>
                        <TextField
                        name="lastname"
                            fullWidth
                            value={user.lastname}
                            onChange={handleInputs}
                            label="Last Name"
                            placeholder="Enter your LastName"
                            required
                            inputProps={{ style: { fontSize: 15, padding: 5 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        >
                        </TextField>
                        <FormControl component="fieldset" style={margTop}>
                            <FormLabel style={{marginBottom:"0px", fontSize:"20px",display: "flex"}}>Gender</FormLabel>
                            <RadioGroup name="gender1" 
                            value={gender}
                            
                             onChange={handleChange}
                            style={{flexDirection: "row"}} >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                
                            </RadioGroup>
                        </FormControl>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker disableToolbar variant="inline" inputvariant="outlined"
                               label="DOB"
                                formate="MMM/dd/yyyy"
                                name="selectedDate"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                  }}
                                />
                        </MuiPickersUtilsProvider>
                        <TextField
                            fullWidth
                            name="email"
                            label="Email"
                            value={user.email}
                            onChange={handleInputs}
                            placeholder="Enter your Email id"
                            inputProps={{ style: { fontSize: 15, padding: 5 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        >
                        </TextField>
                        <TextField
                            fullWidth
                            name="phoneNo"
                            label="Phone No"
                            value={user.phoneNo}
                            onChange={handleInputs}
                            placeholder="Enter your Number"
                            inputProps={{ style: { fontSize: 15, padding: 5 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        >
                        </TextField>
                        <TextField
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            value={user.password}
                            onChange={handleInputs}
                            placeholder="Enter your password"
                            inputProps={{ style: { fontSize: 15, padding: 5 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        >
                        </TextField>
                        {/* <TextField
                            fullWidth
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            inputProps={{ style: { fontSize: 15, padding: 5 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        >
                        </TextField> */}
                        <FormControlLabel
                        control={<Checkbox name="checkedA" 
                            value={user.checkedA}
                            onChange={handleInputs}
                        />}
                            label="I accepts the terms and conditions"
                           // style={{ fontSize: "2rem" }}
                        />                    
                        <Button type="submit" 
                                style={btnstyle} 
                                variant="contained" 
                                color="primary"
                                value="register"
                                onClick={PostData}
                        
                        >Sign up</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Signup
