import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Data from '../../JSON-data/Data';

const DialogLogout = (props) => {
    const {open,handleLogout} = props;

    const handleNextPage=()=>{
        
        handleLogout();
    }
  return (
    <Dialog
        open={open}
        onClose={handleLogout}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to logout ?"}
        </DialogTitle>
        <DialogActions>
          <Button style={{backgroundColor:'#01579b',color:'white',marginRight:'2%'}} href='/' onClick={handleNextPage}>Yes</Button>
          <Button style={{backgroundColor:'#01579b',color:'white'}} onClick={handleLogout} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default DialogLogout;
