import React, { useState } from 'react'
import './LoginForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function LoginForm() {
   const [userName,setUserName]=useState('');
   const [password,setPassword]=useState('');

   const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  console.log(userName);
  console.log(password);
  return (
    <Container fixed className='container'>
    <div className='forms'>
        <div className='formDiv'>
        <form >
      <h1>Login</h1>
        <label className='label'>
            UserName:
        </label >
        <br />
        <div className='inputDiv'>
          <TextField className='input' id="outlined-basic" label="Username" variant="outlined" InputLabelProps={{
          style: { marginLeft: 0 },
        }}/>
        </div>
        <label className='label'>
            Password:
        </label>
        <br />
        <div className='inputDiv'>
          <TextField className='input' id="outlined-basic" label="Password" variant="outlined" InputLabelProps={{
          style: { marginLeft: 0 },
        }}/>
        </div>
    
        <div className='loginButton'>
        <Button className='button' variant="contained" color="primary" href='/content'>
          Login
        </Button>
        </div>
        
      </form>
        </div>
      
    </div>
    </Container>
    
  );
};

export default LoginForm;
