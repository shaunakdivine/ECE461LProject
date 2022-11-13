import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';


export const AddUserPopup = props => {
  const { show, submitting, onSubmission, onClose } = props;
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    if (form.checkValidity() === false) return;

    const fd = new FormData(form);
    onSubmission(fd.get('a-name'));
    clearForm();
  }

  const clearForm = () => {
    setValidated(false);
  }
  
  return (
    <Modal show={show} onHide={onClose} backdrop='static' keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Authorized User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id='create-project' noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>User Email</Form.Label>
            <Form.Control
              type="string"
              placeholder="Enter a user email to authorize"
              name='a-name'
              required />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='w-100' variant='primary' type='submit' form='create-project' disabled={submitting}>
          {
            submitting
              ? <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              : 'Add Authorized User'
          }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AddUserPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  onSubmission: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}
