import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

export const ProjectHWPanel = props => {
  const { className, projectHW } = props;

  return (
    <Row className={`${className} align-items-center`}>
      <Col md={3}>
        {projectHW.name}: {projectHW.checkedIn}/{projectHW.capacity}
      </Col>
      <Col md={9}>
        <InputGroup>
          <InputGroup.Text>Enter Quantity:</InputGroup.Text>
          <Form.Control
            type='number'
            aria-label='input-quantity'
            aria-describedby='input-quantity' />
          <Button variant="primary">Check In</Button>
          <Button variant="secondary">Check Out</Button>
        </InputGroup>
      </Col>
    </Row>
  );
}

ProjectHWPanel.propTypes = {
  className: PropTypes.string,
  projectHW: PropTypes.object.isRequired,
};