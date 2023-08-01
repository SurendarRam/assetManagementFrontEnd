import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './DatePicker.css';

const DatePicker = () => {
  const [selectedDateFrom, setSelectedDateFrom] = useState(null);

  const handleDateChangeFrom = (date) => {
    setSelectedDateFrom(date ? date.toLocaleDateString() : '');

  };

  const [selectedDateTo, setSelectedDateTo] = useState(null);

  const handleDateChangeTo = (date) => {
    setSelectedDateTo(date ? date.toLocaleDateString() : '');   
  };

  return (
    <div className='date-con'>
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justifyContent="space-around" >
        <p  className='date-h1'>Date Filter :</p>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="From"
          value={selectedDateFrom}
          onChange={handleDateChangeFrom}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          autoOk
          InputProps={{
            readOnly: true,
          }}
          style={{marginTop: '0'}}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="To"
          value={selectedDateTo}
          onChange={handleDateChangeTo}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          autoOk
          InputProps={{
            readOnly: true,
          }}
          style={{marginTop: '0'}}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
    </div>
  )
}

export default DatePicker;
