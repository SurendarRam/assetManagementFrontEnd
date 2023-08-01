
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Data from '../../JSON-data/Data';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { v4 as uuid } from 'uuid';
import { NotificationContainer,NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import axios from 'axios';



const DialogAdd = (props) => {
  const {open,handleClose,setData,} = props;

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [issueDate, setIssueDate] = useState('');

  ///Date....
  const [selectedDate, setSelectedDate] =useState(null);

  const handleDateChange = (date) => {
    
    setSelectedDate(date);
    setDateError(false);
    // setIssueDate(selectedDate ? selectedDate.toLocaleDateString() : '');
  };

  useEffect(()=>{
    let value=sessionStorage.getItem("item_key");
    console.log("AddValues=",value);
  },[]
  )
  const  [nameError,setNameError]=useState(false);
  const  [typeError,setTypeError]=useState(false);
  const  [dateError,setDateError]=useState(false);

  const handleCloseFunction=() =>{
    setNameError(false)
    setTypeError(false)
    setDateError(false)
    setName('')
    setType('')
    setSelectedDate(null)
    handleClose();
    
  }

  const handleSave=()=>{
    const val = {
        name: name,
        type: type,
        issueDate: selectedDate ? selectedDate.toLocaleDateString() : ''
    }
    setData(val);
   
    if(name.trim().length===0){
      setNameError(true);
    }
    else{
      setNameError(false);
    }
    if(type.length===0){
      setTypeError(true);
    }
    else{
      setTypeError(false);
    }
    if(!selectedDate){
      setDateError(true);
    }
    else{
      setDateError(false);
    }
    //logic.................
    if(name.trim()===''||type===''||selectedDate===null){
      NotificationManager.error('Enter all the values', 'ERROR', 5000, () => {
        alert('callback');
      });
      
    }
    else{
    Data.list.push(val);
    // sessionStorage.setItem("item_key", JSON.stringify(Data.list));
    
      
        axios.post('http://localhost:4000/api/courses',val)
        .then(response => {
          console.log('Data posted successfully:', response.data);
          setData(response.data)
          // You can handle the response here, such as displaying a success message
        })
        .catch(error => {
          console.error('Error:', error);
          // You can handle errors here, such as displaying an error message
        });

      
  
    NotificationManager.success('Successfully Added', 'SUCCESS');
    handleClose();
    setName('')
    setType('')
    setSelectedDate(null);
    }
    
    
  }

  const handleNameChange=(event)=>{
    setName(event.target.value);
    setNameError(false);
  };
  const handleTypeChange=(event)=>{
    setType(event.target.value);
    setTypeError(false);
  };
//   const handleIssueDateChange=(event)=>{
//     setIssueDate(event.target.value);
//   };
  

  return (
    <>
    <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add</DialogTitle>
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
              onChange={handleNameChange}
              autoComplete="off"
              error={nameError}
              helperText={nameError?'Enter any name*':''}
            />
            <FormControl error={typeError} variant='outlined' fullWidth sx={{minWidth: '300px'}}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select 
                labelId="type"
                margin="dense"
                id="type"
                label="Type"
                InputLabelProps={{
                  style: { marginLeft: 0 },
                }}
                onChange={handleTypeChange}
                autoComplete="off"
                helperText={typeError?'Enter any type*':''}
              >
              
                <MenuItem value={'laptop'}>Laptop</MenuItem>
                <MenuItem value={'mouse'}>Mouse</MenuItem>
                <MenuItem value={'dongle'}>Dongle</MenuItem>
              </Select>
              <FormHelperText>{typeError?'Enter any type*':''}</FormHelperText>
            </FormControl>
             {/* <TextField
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
              onChange={handleTypeChange}
              value={dataVisible?.type}
              autoComplete="off"
              error={typeError}
              helperText={typeError?'Enter any type*':''}
            /> */}
             {/* <TextField
              autoFocus
              margin="dense"
              id="issueDate"
              label="Issue Date"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleIssueDateChange}
              value={dataVisible?.issueDate}
            /> */}
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="IssueDate"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          autoOk
          InputProps={{
            readOnly: true,
          }}
          autoComplete="off"
          error={dateError}
              helperText={dateError?'Pick any date*':''}
        />
          </MuiPickersUtilsProvider>
          

          </DialogContent>
          <DialogActions>
            <Button style={{backgroundColor:'#01579b',color:'white'}} onClick={handleSave}>Save</Button>
            <Button style={{backgroundColor:'#01579b',color:'white'}} onClick={handleCloseFunction}>Cancel</Button>
          </DialogActions>
        </Dialog>
        <NotificationContainer/>
        </>
         
  )
 
}

export default DialogAdd
