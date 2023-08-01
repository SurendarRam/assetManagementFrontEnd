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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';


const DialogEdit = (props) => {
  const {open,handleClose,objId,setData,listData} = props;
  // const [data, setDatas] = useState([]);
  

  // useEffect(()=>{
  //   const storedValues = JSON.parse(sessionStorage.getItem("item_key"));

  //   const filtered = storedValues &&  storedValues.filter(value => value.id===objId);

  //   setDatas(filtered);
  //   console.log(data);
  //   console.log("listData::::",listData)

  // },[]);

 
  const [nameData,setNameData]=useState('');
  const [typeData,setTypeData]=useState('');
  const [issueDateData,setIssueDateData]=useState(null);

  useEffect(() =>{
    setTypeData(listData?.type);
    setNameData(listData?.name);
    
    setIssueDateData(listData?.issueDate);
  },[listData]);
  

  const handleNameChange =(event) => {
    setNameData(event.target.value);
  };
  const handleTypeChange =(event) => {
    setTypeData(event.target.value);
  };
  const handleIssueDateChange =(date) => {
    setIssueDateData(date ? date.toLocaleDateString() : '',);
  };


  const handleSave=()=>{
    // var item_value = sessionStorage.getItem("item_key");
    // let list =JSON.parse(item_value)
    // const val=list.map((item)=> {
    //   if(item.id===listData.id){
    //     return {...item,name:nameData,type:typeData,issueDate:issueDateData}
    //   }
    //   return item
    // })
    // sessionStorage.setItem("item_key", JSON.stringify(val))

    axios.post(`http://localhost:4000/api/courses/post/${listData._id}`,{'name':nameData,'type':typeData,'issueDate':issueDateData})
    .then(response => {
      console.log('Data updated successfully:', response.data);
      setData(response.data)
      // You can handle the response here, such as displaying a success message
    })
    .catch(error => {
      console.error('Error:', error);
      // You can handle errors here, such as displaying an error message
    });

    handleClose();
  }


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
        value={nameData}
        onChange={handleNameChange}
        autoComplete="off"
              error={!nameData}
              helperText={!nameData?'Enter any name*':''}  
      />
        <FormControl variant='outlined' fullWidth sx={{minWidth: '300px'}}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select 
                margin="dense"
                id="type"
                label="Type"
                InputLabelProps={{
                  style: { marginLeft: 0 },
                }}
                value={typeData}
                onChange={handleTypeChange}
                autoComplete="off"
                error={!typeData}
                helperText={!typeData?'Enter any name*':''}
              >
            
                <MenuItem value={'laptop'}>Laptop</MenuItem>
                <MenuItem value={'mouse'}>Mouse</MenuItem>
                <MenuItem value={'dongle'}>Dongle</MenuItem>
              </Select>
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
        value={typeData}
        
        onChange={handleTypeChange}
        autoComplete="off"
              error={!typeData}
              helperText={!typeData?'Enter any name*':''}
      /> */}

       {/* <TextField
        autoFocus
        margin="dense"
        id="issueDate"
        label="Issue Date"
        type="text"
        fullWidth
        variant="outlined"
        value={listData?.issueDate}
        
        onChange={handleIssueDateChange}
      /> */}
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="IssueDate"
          value={issueDateData}
          onChange={handleIssueDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          autoOk
          autoComplete="off"
          error={!issueDateData}
              helperText={!issueDateData?'Pick any date*':''}
        />
          </MuiPickersUtilsProvider>


    </DialogContent>
    <DialogActions>
      <Button style={{backgroundColor:'#01579b',color:'white'}} onClick={handleSave}>Save</Button>
      <Button style={{backgroundColor:'#01579b',color:'white'}} onClick={handleClose}>Cancel</Button>
    </DialogActions>
  </Dialog>
   
)
 
}

export default DialogEdit
