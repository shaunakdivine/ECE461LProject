// import './Projects.css';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import StatusButton from './StatusButton';
// import ProjectContent from '../ProjectContent/ProjectContent';
import PropTypes from 'prop-types';
import HWPanel from '../hardware/HWPanel';
// import ProjectContent from '../ProjectContent/ProjectContent';

function ProjectPanel(props) {
  const { projectName } = props;
  return (
    <Card className='mb-4 bg-light'>
      <Card.Body>
        <Row className='align-items-center'>
          <Col md={2}>
            <h3 className='m-0'>{projectName}</h3>
          </Col>
          <Col md={2}>
            list, of, authorized, users
          </Col>
          <Col>
            {/* <ProjectContent />
            <ProjectContent /> */}
            <HWPanel className='mb-3' />
            <HWPanel />
          </Col>
          <Col className='justify-content-center' md={1}>
            <StatusButton isJoined={true} initialText="Join"></StatusButton>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

ProjectPanel.propTypes = {
  projectName: PropTypes.string.isRequired,
}

export default ProjectPanel;