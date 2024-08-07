import React from 'react';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';

// Function to determine greeting based on the time of day
const getGreeting = () => {
  const hours = new Date().getHours();
  if (hours < 12) {
    return 'Good morning';
  } else if (hours < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};

const DateDisplay = () => {
  return (
    <Typography
      sx={{
        flexGrow: 1,
        fontWeight: 'bold',
        color: 'black',
        fontSize: '1.5rem',
        textAlign: 'center',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#fffff',
      }}
    >
      {getGreeting()}!  Today is {format(new Date(), 'eeee, do MMMM yyyy')}
    </Typography>
  );
};

export default DateDisplay;
