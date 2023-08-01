import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DialogView = (props) => {
    const {open,handleClose,objId,dataVisible} = props;
    const [data, setData] = useState([]);

    useEffect(()=>{
        const storedValues = JSON.parse(sessionStorage.getItem("item_key"));
    // console.log(`[info] - dialog view - stored values: ${JSON.stringify(storedValues)}`)

        const filtered = storedValues && storedValues.filter(value => value.id===objId);
        setData(filtered);
        console.log(data);
    
      },[]);
    

    
  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Edit</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        type="text"
        fullWidth
        variant="outlined"
        value={dataVisible?.name}
        InputProps={{
            readOnly: true,
          }}
  
        
      />
       <TextField
        autoFocus
        margin="dense"
        id="type"
        label="Type"
        InputLabelProps={{
          style: { marginLeft: 0 }, 
        }}
        type="text"
        fullWidth
        variant="outlined"
        value={dataVisible?.type}
        InputProps={{
            readOnly: true,
          }}
  
        
        
      />
       {/* <TextField
        autoFocus
        margin="dense"
        id="issueDate"
        label="Issue Date"
        type="text"
        fullWidth
        variant="outlined"
        value={dataVisible?.issueDate}
        InputProps={{
            readOnly: true,
          }}
      /> */}
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="IssueDate"
          value={dataVisible?.issueDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          InputProps={{
            readOnly: true,
          }}
          readOnly
          autoOk
          
        />
          </MuiPickersUtilsProvider>
    </DialogContent>
    <DialogActions>
      <Button style={{backgroundColor:'#01579b',color:'white'}} onClick={handleClose}>Cancel</Button>
    </DialogActions>
  </Dialog>
  )
}

export default DialogView;
