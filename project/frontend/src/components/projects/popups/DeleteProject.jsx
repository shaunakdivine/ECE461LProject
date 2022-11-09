import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { useState } from 'react';


export const DeleteProjectPopup = props => {
    const { isOpen, onClose } = props;
    // const [deleteProject, setdeleteProject] = useState(props);
    

    const handleCLick = () => {
        // setdeleteProject(true)
        // if(deleteProject){
        //     <h1>Project Deleted</h1>
        // }
        onClose();
    }




    return(
        <>
        {/* <Button type="button" className ="btn btn-outline-primary" style={{ marginTop: "1%" }} data-toggle="modal" data-target="#exampleModal" onClick={openModal}>
            Delete Project
        </Button> */}
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>  
                    <Form.Group className = "mb-3">
                        <Form.Label>    
                            Are You Sure?
                        </Form.Label>
                    </Form.Group>
                </Form>
                <Button variant = "primary" type = "submit" onClick={() => handleCLick() }>
                    Yes
                </Button>
            </Modal.Body>
        </Modal></>
    );
}

DeleteProjectPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}