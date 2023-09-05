import React, { useState } from 'react'
import './CreateUser.css';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Container } from '@material-ui/core';
import { Button } from '@mui/material';
import { NotificationContainer,NotificationManager} from 'react-notifications';
import axios from 'axios';


function LoginForm() {
   const [userName,setUserName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [conPassword,setConPassword]=useState('');

   const handleUsernameChange = (event) => {
    setUserName(event.target.value);
    setNameError(false);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPassError(false);
  };
  const handleConPasswordChange = (event) => {
    setConPassword(event.target.value);
    setConPassError(false);
  };

  const  [nameError,setNameError]=useState(false);
  const  [emailError,setEmailError]=useState(false);
  const  [passError,setPassError]=useState(false);
  const [conPassError,setConPassError]=useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const nextPageHandler=()=>{
    if(userName.trim().length===0 || password.trim().length===0 || conPassword.trim().length===0||email.trim().length===0){
        NotificationManager.error('Enter all fields', 'ERROR', 5000, () => {
            alert('callback');
        });
    }
    else if(password.trim().length!==0 && conPassword.trim().length!==0&&password!==conPassword){
        NotificationManager.error('password and confirm password does not match', 'ERROR', 5000, () => {
            alert('callback');
        });
    }
    else if(!emailRegex.test(email)){
        NotificationManager.error('Enter valid email address', 'ERROR', 5000, () => {
            alert('callback');
        });
    }
    else  if(emailRegex.test(email)){
        if(userName.trim().length!==0 && password.trim().length!==0 && conPassword.trim().length!==0&&password===conPassword){
            axios.post(`http://localhost:4000/api/values/user`,{'username':userName,'email':email,'password':password})
            .then(response => {
        
                window.location.href = '/';
                NotificationManager.success(' Signed Up Successfully', 'SUCCESS');
              
            })
            .catch(error => {
              console.error('Error:', error);
            //   NotificationManager.error('Enter valid Username and Password', 'ERROR', 5000, () => {
            //     alert('callback');
            //   });
            });
            }
    }
     
    else{
        NotificationManager.error('Enter all fields', 'ERROR', 5000, () => {
            alert('callback');
          });
    }
    
    

    if(userName.trim().length===0){
      setNameError(true);
    }
    else{
      setNameError(false);
    }
    if(email.trim().length===0){
        setEmailError(true);
      }
      else{
        setEmailError(false);
      }
    if(password.length===0){
      setPassError(true);
    }
    else{
      setPassError(false);
    }
    if(conPassword.length===0){
        setConPassError(true);
      }
      else{
        setConPassError(false);
      }
  }
  //pass
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //conpass
  const [showConPassword, setShowConPassword] = React.useState(false);

  const handleClickShowConPassword = () => setShowConPassword((show) => !show);

  const handleMouseDownConPassword = (event) => {
    event.preventDefault();
  };


  
  return (
    <>
    <Container fixed className='container'>
    <div className='forms'>
        <div className='formDiv'>
        <form >
      <h1>Create User</h1>
        <label className='label'>
            Username:
        </label >
        <br />
        <div className='inputDiv'>
          <TextField className='input' id="outlined-basic" label="Username" variant="outlined" InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        size="small"
        onChange={handleUsernameChange}
        autoComplete="off"
              error={nameError}
              helperText={nameError?'Enter any username*':''}
        />
        </div>
        <label className='label'>
            Email:
        </label >
        <br />
        <div className='inputDiv'>
          <TextField className='input' id="outlined-basic" label="Email" variant="outlined" InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        size="small"
        onChange={handleEmailChange}
        autoComplete="off"
              error={emailError}
              helperText={emailError?'Enter any username*':''}
        />
        </div>
        <label className='label'>
            Password:
        </label>
        <br />
        <div className='inputDiv'>

        <FormControl style={{width:'100%'}} variant="outlined" error={passError}>
          <InputLabel htmlFor="centered-input">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={handlePasswordChange}
            autoComplete="off"
            size="small"
              
              
          />
          <FormHelperText>{passError?'Enter any password*':''}</FormHelperText>
        </FormControl>

         
        </div>
        <label className='conLabel'>
            Confirm Password:
        </label>
        <br />
        <div className='conInputDiv'>

        <FormControl style={{width:'100%'}} variant="outlined" error={conPassError}>
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showConPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConPassword}
                  onMouseDown={handleMouseDownConPassword}
                  edge="end"
                >
                  {showConPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
            onChange={handleConPasswordChange}
            autoComplete="off"
            size="small"
              
              
          />
          <FormHelperText>{passError?'Enter any password*':''}</FormHelperText>
        </FormControl>

         
        </div>
    
        <div className='loginButton'>
        <Button className='button' variant="contained" color="primary" onClick={nextPageHandler}>
          Create
        </Button>
        <Button style={{marginLeft:"8px"}} className='button' variant="contained" color="primary" href='/'>
          Cancel
        </Button>
        </div>
        
      </form>
        </div>
      
    </div>
    </Container>
    <NotificationContainer/>
    </>
    
  );
};

export default LoginForm;
