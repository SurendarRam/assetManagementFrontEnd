import React from 'react'
import './Header.css';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DialogLogout from './dialog/DialogLogout';

const Header = () => {
    const [openLogout, setOpenLogout] = React.useState(false);


      const handleLogoutClickOpen = (rowData) => {
        setOpenLogout(true);
    
      };
    
      const handleLogoutClose = () => {
        setOpenLogout(false);
      };
    

  return (
    <>
    <AppBar component="nav" >
        <Toolbar className='head'>
          
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
            style={{color: 'white',fontWeight: 'bold',width:'15%'}}
          >
            Asset Management
          </Typography>
          <Box  sx={{display: { xs: 'none', sm: 'block' } }}style={{width:'85%',marginLeft:'20px'}}>
              <Button key={0} sx={{ color: 'white' }} style={{fontWeight:'bolder',color: 'white'}}>
                Home
              </Button>


            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                    <Button  endIcon={<KeyboardArrowDownIcon />} key={1} sx={{ color: 'white' }} {...bindTrigger(popupState)} style={{fontWeight:'bolder',color: 'white',}}>
                        Asset
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem href='' ><Button href="/laptop" target="_blank" style={{backgroundColor:'#01579b',color:'white',width:'100%'}}>Laptop</Button></MenuItem>
                        <MenuItem ><Button href="/laptop" target="_blank" style={{backgroundColor:'#01579b',color:'white',width:'100%'}}>Mouse</Button></MenuItem>
                        <MenuItem ><Button href="/laptop" target="_blank" style={{backgroundColor:'#01579b',color:'white',width:'100%'}}>Dongle</Button></MenuItem>
                    </Menu>
                    </React.Fragment>
                )}
            </PopupState>

              <Button className='btn' key={2} sx={{ color: 'white' }} style={{fontWeight:'bolder',color: 'white',}}  onClick={handleLogoutClickOpen}>
                Logout
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <DialogLogout open={openLogout} handleLogout={handleLogoutClose}/>
      </>
  )
}

export default Header;
