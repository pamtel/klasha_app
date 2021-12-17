import React, { useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (e: Date) => {
    setSelectedDate(e);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        disableToolbar
        fullWidth
        variant="static"
        disabled={true}
        value={selectedDate}
        onChange={(e) => handleDateChange(e)}
      />
    </MuiPickersUtilsProvider>
  );
};
