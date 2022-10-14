import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Project } from '../project'


function ProjectContainer(props) {
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: 'Project Name 1',
      users: ['list', 'of', 'authorized', 'users'],
      joined: false,
    },
    {
      id: 1,
      name: 'Project Name 2',
      users: ['list', 'of', 'authorized', 'users'],
      joined: true,
    },
    {
      id: 2,
      name: 'Project Name 3',
      users: ['list', 'of', 'authorized', 'users'],
      joined: false,
    }
  ]);

  const joinOrLeave = id => {
    setProjects(prev => prev.map(({ joined, ...p }) => ({
      joined: p.id === id ? !joined : joined,
      ...p
    })));
  }

  return (
    <>
      <Typography variant='h4' component='div'>Projects</Typography>
      {projects.map(p => (
        <Box
          key={p.id}
          sx={{ my: 2 }}>
          <Project
            name={p.name}
            users={p.users}
            joined={p.joined}
            onJoin={() => joinOrLeave(p.id)} />
        </Box>
      ))}
    </>
  )
}

ProjectContainer.propTypes = {}

export { ProjectContainer }