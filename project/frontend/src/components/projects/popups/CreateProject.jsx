import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export const CreateProjectPopup = props => {
  const { show, submitting, onSubmission, onClose } = props;
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    if (form.checkValidity() === false) return;

    const fd = new FormData(form);
    onSubmission({
      name: fd.get('p-name'),
      description: fd.get('p-desc'),
    });
    clearForm();
  };

  const clearForm = () => {
    setValidated(false);
  }

  return (
    <Modal show={show} onHide={onClose} backdrop='static' keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create A New Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id='create-project' noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="string" placeholder="Enter Project Name" name='p-name' required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="string" placeholder="Enter Project Description" name='p-desc' required/>
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
              : 'Create Project'
          }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

CreateProjectPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  onSubmission: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}
