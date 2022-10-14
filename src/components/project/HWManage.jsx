import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, TextField, Typography, useTheme } from '@mui/material'

function HWManage(props) {
  const { sx, hwName, initialAmount, totalAmount } = props;
  const [curAmount, setCurAmount] = useState(initialAmount);
  const [enteredAmount, setEnteredAmount] = useState('');
  const theme = useTheme();

  const changeAmount = (direction) => {
    var change = enteredAmount * direction;

    if (curAmount + change > totalAmount) {
      change = totalAmount - curAmount;
    } else if (curAmount + change < 0) {
      change = -curAmount;
    }
    setCurAmount(prev => prev + change);
    setEnteredAmount('');
  }

  return (
    <Grid
      container
      spacing={1}
      sx={{
        alignItems: 'center',
        ...sx,
      }}>
      <Grid item xs={3}>
        <Typography component='div'>
          {hwName}: {curAmount}/{totalAmount}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          sx={{ backgroundColor: theme.palette.background.default }}
          size='small'
          variant='outlined'
          label='Enter Qty'
          type='number'
          inputProps={{ min: 1 }}
          value={enteredAmount}
          onChange={e => setEnteredAmount(e.target.value)} />
      </Grid>
      <Grid item xs={5}>
        <Button
          sx={{ mr: 1 }}
          variant='contained'
          onClick={() => changeAmount(1)}
          disabled={enteredAmount === ''}>Check In</Button>
        <Button
          variant='contained'
          onClick={() => changeAmount(-1)}
          disabled={enteredAmount === ''}>Check Out</Button>
      </Grid>
    </Grid>
  )
}

HWManage.propTypes = {
  hwName: PropTypes.string.isRequired,
  initialAmount: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
}

export default HWManage
