
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
// import './HWPanel.css';
import React from 'react';
import PropTypes from 'prop-types';

function HWPanel(props) {
  const { className } = props;

  return (
    <Row className={`${className} align-items-center`}>
      <Col md={3} className='text-end'>
        HWSet: 50/100
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

HWPanel.propTypes = {
  className: PropTypes.string,
}

export default HWPanel;