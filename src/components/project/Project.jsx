import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material'
import HWManage from './HWManage';

function Project(props) {
  const { name, users, joined, onJoin } = props;

  return (
    <Card
      variant='outlined'
      sx={{ backgroundColor: joined ? '#CCE3BA' : null }}>
      <CardContent>
        <Grid
          container
          spacing={2}
          alignItems='center'>
          <Grid item xs={2}>
            <Typography variant='h6' component='div'>{name}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="text.secondary">{users.join(', ')}</Typography>
          </Grid>
          <Grid item xs={6}>
            <HWManage
              hwName='HWSet1'
              initialAmount={50}
              totalAmount={100}
              sx={{ mb: 1 }} />
            <HWManage
              hwName='HWSet2'
              initialAmount={0}
              totalAmount={100} />
          </Grid>
          <Grid item xs={1}>
            <Button
              variant='contained'
              onClick={onJoin}>{ joined ? 'Leave' : 'Join' }</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  joined: PropTypes.bool.isRequired,
  onJoin: PropTypes.func.isRequired,
}

Project.defaultProps = {
  joined: false
}

export { Project }
