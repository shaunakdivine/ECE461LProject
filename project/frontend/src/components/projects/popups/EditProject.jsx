import React, { useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export const EditProjectPopup = props => {
  const { show, projectId, projects, submitting, onSubmission, onClose } = props;
  const [validated, setValidated] = useState(false);
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
    <Modal show={show} onHide={onClose} backdrop='static' centered keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id='edit-project' noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="string" defaultValue={project.name} placeholder="Enter Project Name" name='p-name' required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="string" defaultValue={project.description} placeholder="Enter Project Description" name='p-desc' required />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='w-100' variant='primary' type='submit' form='edit-project' disabled={submitting}>
          {
            submitting
              ? <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              : 'Edit Project'
          }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

EditProjectPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  projectId: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  submitting: PropTypes.bool.isRequired,
  onSubmission: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}