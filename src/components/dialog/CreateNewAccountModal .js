import React, { useState } from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Tooltip,
  } from '@mui/material';
const CreateNewAccountModal  = (props) => {
    const { open, columns, onClose, onSubmit }=props;

    const [values, setValues] = useState(''
  );

  const handleSubmit = () => {
    let value={name: {
        firstName:values['name.firstName'],
        lastName:values['name.lastName'],
      },address: values.address,
      city: values.city,
      state: values.state,
      completed: values.completed,
      status: values.status,
    }
    //put your validation logic here
    console.log(value)
    onSubmit(value);
    onClose();
  };
  return (
    <Dialog open={open}>
    <DialogTitle textAlign="center">Create New Account</DialogTitle>
    <DialogContent>
      <form onSubmit={(e) => e.preventDefault()}>
        <Stack
          sx={{
            width: '100%',
            minWidth: { xs: '300px', sm: '360px', md: '400px' },
            gap: '1.5rem',
          }}
        >
          {columns.map((column) => column.accessorKey!=='actions'?(
            <TextField
              key={column.accessorKey}
              label={column.header}
              name={column.accessorKey}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          ):null)}
        </Stack>
      </form>
    </DialogContent>
    <DialogActions sx={{ p: '1.25rem' }}>
      <Button onClick={onClose}>Cancel</Button>
      <Button color="secondary" onClick={handleSubmit} variant="contained">
        Create New Account
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default CreateNewAccountModal 
