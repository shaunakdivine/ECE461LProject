import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export const EditProjectPopup = props => {
    const { onSubmission } = props;
    const [isOpen, setOpen]= useState(false);
    const [validated, setValidated] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    
    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
    // const [id, setid] = useState("");

    const handleSubmit = event => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (form.checkValidity() === false) return;

        const fd = new FormData(form);
        onSubmission({
            name: fd.get('p-name'),
            desc: fd.get('p-desc'),
        });
    }





    return(
        <><Button type="button" variant='outline-primary' style={{ marginTop: "1%" }} data-toggle="modal" data-target="#exampleModal" onClick={openModal}>
            Edit Project
        </Button>
        <Modal show={isOpen} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Current Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>  
                    <Form.Group className = "mb-3">
                        <Form.Label>    
                            Name
                        </Form.Label>
                        <Form.Control type = "string" placeholder = "Enter Project Name" name = 'p-name'/>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control type = "string" placeholder = "Enter Project Description" name = 'p-desc'/>
                        {/* <Form.Label>
                            Project ID
                        </Form.Label>
                        <Form.Control type = "string" placeHolder = "Enter Project ID" onChange={e => setid(e.target.value)}/> */}
                    </Form.Group>
                </Form>
                <Button variant = "primary" type = "submit" onClick={() => closeModal()}>
                    Submit
                </Button>
            </Modal.Body>
        </Modal></>
    );
}

EditProjectPopup.propTypes = {
    onSubmission: PropTypes.func.isRequired,
  }
