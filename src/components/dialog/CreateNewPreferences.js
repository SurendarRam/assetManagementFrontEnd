import React, { useEffect, useState } from 'react'
import { Box, Tooltip, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
const CreateNewPreferences = (props) => {
  const {open,setDialogOpen,value,id,setTableData,tableData}=props;
  // const [isDialogOpen, setDialogOpen] = useState(false);
  const [editedValue, setEditedValue] = useState('');
  const [editingRowId, setEditingRowId] = useState('');
  useEffect(() =>{
    setEditedValue(value);
    // setDialogOpen(open);
    setEditingRowId(id)
  },[value,open,id]);
console.log('editedvalllll',editedValue) 
  // const handleEditClick = (data,index) => {
  //   setEditedValue(data);
  //   setDialogOpen(true);
  //   setEditingRowId(index)
  //   // You can also pre-fill the editedValue here with the current value from the row
  // };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditedValue('');
    setEditingRowId('');
    // setEditing(false);

  };

  const handleSaveEdit = () => {
    // console.log(`Save edited value ${editedValue} for row with ID: ${editingRowId}`);
    // Implement your save logic here
    setTableData( tableData.map((item, currentIndex) =>currentIndex === editingRowId ? editedValue : item))
    //  console.log('resdatas',data.map((item, currentIndex) =>currentIndex === editingRowId ? editedValue : item))
    handleCloseDialog();
    // setEditing(false)
    setEditingRowId('');

  };
  // const handleInpusettChange = ( value) => {
  //   // console.log('fielddd',field.name.firstName)
  //   console.log('valueee....',value)
  //   console.log('editedvalue',editedValue)
  //   setEditedValue(value);
  // };

  // const [data,setData]=useState('');

  // useEffect(() =>{
  //   setData(editedValue);
  //   // firstNameData&&console.log('firstNameData',firstNameData)
  // },[editedValue]);
  return (
    <Dialog open={open} onClose={handleCloseDialog}>
    <DialogTitle>Edit</DialogTitle>
    <DialogContent>
    {editedValue && (
      <TextField
        label="First Name"
        value={editedValue.name.firstName}
        InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        type="text"
        fullWidth
        variant="outlined"
        style={{marginTop:"15px"}}
        onChange={(event) =>
          // console.log('(event.target.value',editedValue&&{ ...editedValue, name: { ...editedValue.name, firstName: event.target.value}  })
          setEditedValue(editedValue&&{ ...editedValue, name: { ...editedValue.name, firstName: event.target.value}  })
        }
          
      />
      
    )}
    {/* {console.log("eeeedddd",editedValue)} */}
    {editedValue && (
      <TextField
        label="Last Name"
        value={editedValue.name.lastName}
        InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        type="text"
        fullWidth
        variant="outlined"
        style={{marginTop:"15px"}}
        onChange={(event) => 
          setEditedValue(editedValue&&{ ...editedValue, name: { ...editedValue.name, lastName: event.target.value}  })
        }
      />
    )}
      <TextField
        label="Address"
        value={editedValue.address}
        InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        type="text"
        fullWidth
        variant="outlined"
        style={{marginTop:"15px"}}
        onChange={(event) => setEditedValue({ ...editedValue,   address: event.target.value  })}
      />
      <TextField
        label="City"
        value={editedValue.city}
        InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        type="text"
        fullWidth
        variant="outlined"
        style={{marginTop:"15px"}}
        onChange={(event) => setEditedValue({ ...editedValue,  city: event.target.value  })}
      />
      <TextField
        label="State"
        value={editedValue.state}
        InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        type="text"
        fullWidth
        variant="outlined"
        style={{marginTop:"15px"}}
        onChange={(event) => setEditedValue({ ...editedValue,  state: event.target.value  })}
      />
      <TextField
        label="Completed"
        value={editedValue.completed}
        InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        type="text"
        fullWidth
        variant="outlined"
        style={{marginTop:"15px"}}
        onChange={(event) => setEditedValue({ ...editedValue,  completed: event.target.value  })}
      />
      <TextField
        label="Status"
        value={editedValue.status}
        InputLabelProps={{
          style: { marginLeft: 0 },
        }}
        type="text"
        fullWidth
        variant="outlined"
        style={{marginTop:"15px"}}
        onChange={(event) => setEditedValue({ ...editedValue,  status: event.target.value  })}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseDialog} color="primary">
        Cancel
      </Button>
      <Button onClick={handleSaveEdit} color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default CreateNewPreferences
