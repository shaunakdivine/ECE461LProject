import React from 'react';
import { Badge, Button, Card, ListGroup, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ProjectPanel = (props) => {
  const { submitting, project, onJoin, onLeave, onOpenDetail } = props;

  const handleJoinLeave = () => {
    if (project.joined) {
      onLeave(project.id);
    } else {
      onJoin(project.id);
    }
  }

  return (
    <Card>
      <Card.Header className='py-3'>
        <h3 className={`fw-bold m-0${project.joined ? '' : ' text-muted'}`}>{project.name}</h3>
        <p className='text-muted m-0'>
          <small>{project.master}</small>
        </p>
      </Card.Header>
      <Card.Body className={project.joined ? '' : ' text-muted'}>
        <Card.Title>Authorized Users</Card.Title>
        <small>{project.authUsers.join(', ')}</small>
      </Card.Body>
      <ListGroup as='ul' variant="flush">
        {
          project.hardwares.map(hardware => (
            <ListGroup.Item as='li' key={hardware.id} className='d-flex justify-content-between align-items-start'>
              <div className={`me-auto${project.joined ? '' : ' text-muted'}`}>{hardware.name}</div>
              <Badge bg={project.joined ? 'primary' : 'secondary'} pill>{hardware.checkedIn}</Badge>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
      <Card.Footer className='d-flex justify-content-between'>
        <Button
          className='w-25'
          variant={submitting ? 'secondary' : project.joined ? 'danger' : 'primary'}
          onClick={handleJoinLeave}
          size='sm'
          disabled={submitting}>
          {
            submitting
              ? <Spinner
                as="span"
                animation="border"
                size="sm"
                style={{verticalAlign: 'text-top'}}
                role="status"
                aria-hidden="true"
              />
              : project.joined
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
  submitting: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired,
  onJoin: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  onOpenDetail: PropTypes.func.isRequired,
}