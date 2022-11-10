import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal';
import { Spinner } from 'react-bootstrap';


export const DeleteProjectPopup = props => {
  const { show, submitting, onDeleteProject, onClose } = props;

  return (
    <Modal show={show} onHide={() => onClose()} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure?</Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          onClick={() => onDeleteProject()}
          disabled={submitting}>
          {
            submitting
              ? <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              : 'Yes'
          }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteProjectPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  onDeleteProject: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}