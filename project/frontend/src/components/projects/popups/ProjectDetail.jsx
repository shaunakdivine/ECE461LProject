import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { ProjectHWPanel } from '../cell';

export const ProjectDetailPopup = props => {
  const {
    show, projectId, projects,
    onOpenDeleteDialog, onClose,
  } = props;
  const [project, setProject] = useState({
    id: -1,
    name: '',
    joined: false,
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
            <Button className='w-100' variant='success'>Edit Project</Button>
          </Col>
          <Col md={6} lg={4} xl={3}>
            <Button className='w-100' variant='danger' onClick={() => onOpenDeleteDialog()}>Delete Project</Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

ProjectDetailPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  // loading: PropTypes.bool.isRequired,
  projectId: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onCheckIn: PropTypes.func.isRequired,
  // onCheckOut: PropTypes.func.isRequired,
  onOpenDeleteDialog: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};