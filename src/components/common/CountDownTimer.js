import React, { useState, useEffect } from 'react';
// utils
import { calculateTimeLeft } from '../../utils/formatTime';
// mui
import { Grid, Typography } from '@mui/material';

function CountDownTimer({ startDate, endDate }) {
  const [currentDate, setCurrentDate] = useState(new Date(startDate));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(currentDate, endDate));

  useEffect(() => {
    const timer = timeLeft.days >= 0 ? setInterval(() => {
      setCurrentDate(prevDate => new Date(prevDate.getTime() + 1000));
      setTimeLeft(calculateTimeLeft(currentDate, endDate));
    }, 1000) : null;

    return () => timer && clearInterval(timer);
  }, [timeLeft, endDate, currentDate]);

  if (timeLeft.days < 0) return <div>Time's up!</div>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Typography variant="h4" align="center">
          {timeLeft.days}
        </Typography>
        <Typography variant="subtitle1" align="center">
          DAYS
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="h4" align="center">
          {timeLeft.hours}
        </Typography>
        <Typography variant="subtitle1" align="center">
          HOURS
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="h4" align="center">
          {timeLeft.minutes}
        </Typography>
        <Typography variant="subtitle1" align="center">
          MINUTES
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="h4" align="center">
          {timeLeft.seconds}
        </Typography>
        <Typography variant="subtitle1" align="center">
          SECONDS
        </Typography>
      </Grid>
    </Grid>

  );
}


export default CountDownTimer;