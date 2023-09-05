import React, { useState } from 'react'
import './LoginForm.css';
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
   const [password,setPassword]=useState('');

   const handleUsernameChange = (event) => {
    setUserName(event.target.value);
    setNameError(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPassError(false);
  };

  const  [nameError,setNameError]=useState(false);
  const  [passError,setPassError]=useState(false);
  const nextPageHandler=()=>{

    if(userName.trim().length===0){
      setNameError(true);
    }
    else{
      setNameError(false);
    }
    if(password.length===0){
      setPassError(true);
    }
    else{
      setPassError(false);
    }

    axios.post(`http://localhost:4000/api/values/login`,{'username':userName,'password':password})
    .then(response => {
      if(response.status===200){
        window.location.href = '/content';
      }
      // else if(response.status===401){
      //   NotificationManager.error('Enter valid Username and Password', 'ERROR', 5000, () => {
      //     alert('callback');
      //   });
      // }
      
    })
    .catch(error => {
      console.error('Error:', error);
      NotificationManager.error('Enter valid Email and Password', 'ERROR', 5000, () => {
        alert('callback');
      });
    });

    
  }
  //pass
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log(userName);
  console.log(password);

  
  return (
    <>
    <Container fixed className='container'>
    <div className='formss'>
        <div className='formDiv'>
        <form >
      <h1>Login</h1>
        <label className='label'>
            Email Address:
        </label >
        <br />
        <div className='inputDiv'>
          <TextField className='input' id="outlined-basic" label="Email" variant="outlined" InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        onChange={handleUsernameChange}
        autoComplete="off"
              error={nameError}
              helperText={nameError?'Enter any username*':''}
        />
        </div>
        <label className='label'>
            Password:
        </label>
        <br />
        <div className='inputDiv'>

        <FormControl style={{width:'100%'}} variant="outlined" error={passError}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
              
              
          />
          <FormHelperText>{passError?'Enter any password*':''}</FormHelperText>
        </FormControl>

          {/* <TextField className='input' id="outlined-basic" label="Password" variant="outlined" InputLabelProps={{
          style: { marginLeft: 0 },
        }}/> */}
        </div>
    
        <div className='loginButton'>
        <Button className='button' variant="contained" color="primary" onClick={nextPageHandler}>
          Login
        </Button>
        <Button style={{marginLeft:"8px"}} className='button' variant="contained" color="primary" href='/user'>
          Signup
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
