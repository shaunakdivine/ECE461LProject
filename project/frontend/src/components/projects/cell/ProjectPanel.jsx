import React, { useState } from 'react';
import { Badge, Button, Card, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ProjectPanel = (props) => {
  const { project, onOpenDetail } = props;
  const [joined, setJoined] = useState(project.joined);

  return (
    <Card>
      <Card.Header className='py-3'>
        <h3 className={`fw-bold m-0${joined ? '' : ' text-muted'}`}>{project.name}</h3>
        <p className='text-muted m-0'>
          <small>{project.master}</small>
        </p>
      </Card.Header>
      <Card.Body className={joined ? '' : ' text-muted'}>
        <Card.Title>Authorized Users</Card.Title>
        <small>{project.authUsers.join(', ')}</small>
      </Card.Body>
      <ListGroup as='ul' variant="flush">
        {
          project.hardwares.map(hardware => (
            <ListGroup.Item as='li' key={hardware.id} className='d-flex justify-content-between align-items-start'>
              <div className={`me-auto${joined ? '' : ' text-muted'}`}>{hardware.name}</div>
              <Badge bg={joined ? 'primary' : 'secondary'} pill>{hardware.checkedIn}</Badge>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
      <Card.Footer className='d-flex justify-content-between'>
        <Button
          className='w-25'
          variant={joined ? 'danger' : 'primary'}
          onClick={() => setJoined(prev => !prev)}
          size='sm'>
          {
            joined
              ? 'Leave'
              : 'Join'
          }
        </Button>
        <Button variant='outline-secondary' size='sm' onClick={() => onOpenDetail(project.id)}>{'View Detail ›'}</Button>
      </Card.Footer>
    </Card>
  )
}

ProjectPanel.propTypes = {
  project: PropTypes.object.isRequired,
  onOpenDetail: PropTypes.func.isRequired,
}