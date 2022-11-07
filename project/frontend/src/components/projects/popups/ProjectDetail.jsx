import React, { useEffect, useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { ProjectHWPanel } from '../cell';

export const ProjectDetailPopup = props => {
  const {
    show, projectId, projects,
    onClose,
  } = props;
  const [project, setProject] = useState({
    id: -1,
    name: '',
    joined: false,
    hw: [],
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
        <Row className='g-3'>
          {
            project.hw.map(hardware => (
              <Col xs={12} key={hardware.id}>
                <ProjectHWPanel projectHW={hardware} />
              </Col>
            ))
          }
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
  onClose: PropTypes.func.isRequired,
};