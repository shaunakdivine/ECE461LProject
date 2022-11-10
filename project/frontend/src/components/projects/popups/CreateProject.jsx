import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export const CreateProjectPopup = props => {
  const { show, onSubmission, onClose, } = props;
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
    <Modal show={show} onHide={onClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create A New Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              Name
            </Form.Label>
            <Form.Control type="string" placeholder="Enter Project Name" name='p-name' />
            <Form.Label>
              Description
            </Form.Label>
            <Form.Control type="string" placeholder="Enter Project Description" name='p-desc' />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Project
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

CreateProjectPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  onSubmission: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}
