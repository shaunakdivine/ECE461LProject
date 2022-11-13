import { Button, Col, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ProjectHWPanel = props => {
  const { className, submitting, projectHW, onCheckIn, onCheckOut } = props;
  const [amount, setAmount] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    if (event.nativeEvent.submitter.name === 'checkin') {
      onCheckIn({ hwsetId: projectHW.id, amount: parseInt(amount) });
    } else if (event.nativeEvent.submitter.name === 'checkout') {
      onCheckOut({ hwsetId: projectHW.id, amount: parseInt(amount) });
    } else {
      return;
    }
  }

  return (
    <Row className={`${className} align-items-center`}>
      <Col md={3}>
        {projectHW.name}: {projectHW.checkedIn}/{projectHW.capacity}
      </Col>
      <Col md={9}>
        <Form onSubmit={handleSubmit}>
        <InputGroup>
            <InputGroup.Text>Enter Quantity:</InputGroup.Text>
            <Form.Control
              type='number'
              min={1}
              aria-label='input-quantity'
              aria-describedby='input-quantity'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required />
            <Button
              name='checkin'
              variant="primary"
              type="submit"
              disabled={amount === ''}>
              {
                submitting
                  ? <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  : 'Check In'
              }
              </Button>
            <Button
              name='checkout'
              variant="secondary"
              type="submit"
              disabled={amount === ''}>
              {
                submitting
                  ? <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  : 'Check Out'
              }
              </Button>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  );
}

ProjectHWPanel.propTypes = {
  className: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  projectHW: PropTypes.object.isRequired,
  onCheckIn: PropTypes.func.isRequired,
  onCheckOut: PropTypes.func.isRequired,
};