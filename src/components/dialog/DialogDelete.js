import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Data from '../../JSON-data/Data';
import axios from 'axios';


const DialogDelete = (props) => {
    const {open,handleClose,setData,dataDelete} = props;
    console.log('deleteDatta............',dataDelete)
    // let list = Data.list;
    const handleDelete=()=>{
        // var item_value = sessionStorage.getItem("item_key");
        // let list =JSON.parse(item_value)
        // const val=list&&list.filter(item=> item.id !== dataDelete.id)
        
        // sessionStorage.setItem("item_key", JSON.stringify(val))
        // Data.list = val;

        axios.delete(`http://localhost:4000/api/courses/delete/${dataDelete._id}`)
        .then(response => {
          console.log('Data deleted successfully:');
          // You can handle the response here, such as displaying a success message
        })
        .catch(error => {
          console.error('Error:', error);
          // You can handle errors here, such as displaying an error message
        });

        setData(dataDelete)
        handleClose();
        
        // item_value && setData(sessionStorage.removeItem(dataDelete));

    };
  return (
   <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to delete ?"}
        </DialogTitle>
        <DialogActions>
          <Button style={{backgroundColor:'#01579b',color:'white'}} onClick={handleDelete}>Yes</Button>
          <Button style={{backgroundColor:'#01579b',color:'white'}} onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default DialogDelete;
