import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { ProjectHWPanel } from '../cell';

export const ProjectDetailPopup = props => {
  const {
    show, userId, projectId, projects,
    onOpenEditModal, onOpenDeleteDialog, onClose,
  } = props;
  const [project, setProject] = useState({
    id: -1,
    name: '',
    joined: false,
    master: '',
    authUsers: [],
    hardwares: [],
  })

  useEffect(() => {
    if (projectId !== -1) {
      setProject(projects.find(p => p.id === projectId));
    }
  }, [projectId, projects]);
  

  return (
    <Modal show={show} onHide={onClose} backdrop='static' size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-muted'>
          <small>Project ID: {project.id}</small>
          <br />
          <small>Created By: {userId === project.master ? 'You' : project.master}</small>
          <br/>
          <small>Authoirzed Users: {project.authUsers.join(', ')}</small>
        </p>
        <hr/>
        {/* <p className='text-muted'><small>Authoirzed Users: {project.master}</small></p> */}
        <p>{project.description}</p>
        <h4 className='mb-3'>Hardware Sets</h4>
        <Row className='g-3 justify-content-center'>
          {
            project.hardwares.map(hardware => (
              <Col xs={12} key={hardware.id}>
                <ProjectHWPanel projectHW={hardware} />
              </Col>
            ))
          }
          <Col md={6} lg={4} xl={3}>
            <Button className='w-100' variant='success' onClick={() => onOpenEditModal()}>Edit Project</Button>
          </Col>
          <Col md={6} lg={4} xl={3}>
            <Button className='w-100' variant='danger' onClick={() => onOpenDeleteDialog()}>Delete Project</Button>
          </Col>
          {
            userId === project.master &&
            <Col lg={6} xl={4}>
              <Button className='w-100' variant='primary' onClick={() => { }}>Add Authorized Users</Button>
            </Col>
          }
        </Row>
      </Modal.Body>
    </Modal>
  )
}

ProjectDetailPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  // loading: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onCheckIn: PropTypes.func.isRequired,
  // onCheckOut: PropTypes.func.isRequired,
  onOpenEditModal: PropTypes.func.isRequired,
  onOpenDeleteDialog: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};