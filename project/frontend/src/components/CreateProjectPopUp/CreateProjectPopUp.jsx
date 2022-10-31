
//import { InputGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function CreateProjectPopUp(props){
    const [isOpen, setOpen]= useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [id, setid] = useState("");



    return(
        <><Button type="button" class="btn btn-outline-primary" style={{ marginTop: "1%" }} data-toggle="modal" data-target="#exampleModal" onClick={openModal}>
            Create Project
        </Button>
        <Modal show={isOpen} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Create A New Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>  
                    <Form.Group className = "mb-3">
                        <Form.Label>    
                            Name
                        </Form.Label>
                        <Form.Control type = "string" placeholder = "Enter Project Name" onChange={e => setName(e.target.value)}/>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control type = "string" placeholder = "Enter Project Description" onChange={e => setDescription(e.target.value)}/>
                        <Form.Label>
                            Project ID
                        </Form.Label>
                        <Form.Control type = "string" placeHolder = "Enter Project ID" onChange={e => setid(e.target.value)}/>
                    </Form.Group>
                </Form>
                <Button variant = "primary" type = "submit" onClick={() => closeModal()}>
                    Submit
                </Button>
            </Modal.Body>
        </Modal></>
    );

}
// class HWPopUp extends React.Component {

//     state = {
//         isOpen: false
//       };
    
//       openModal = () => this.setState({ isOpen: true });
//       closeModal = () => this.setState({ isOpen: false });

//     render(){
//         return (
//             <>
//             <Button type="button" data-toggle="modal" data-target="#exampleModal" onClick={this.openModal}>
//                 See Hardware Details
//             </Button>
//             <Modal show={this.state.isOpen} onHide={this.closeModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Hardware Details for Project X</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           <div className = "HWPanel-container">
//                 <div className="HWPanel-text">
//                     <p> HWSet: *HW number placeholder*</p>
        
//                 </div>
//                 <div className = "HWPanel-buttons">
//                     <div class="input-group mb-3">
//                         <div class="input-group-prepend">
//                             <span class="input-group-text" id="inputGroup-sizing-default">Enter Quantity:</span>
//                         </div>
//                         <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
//                     </div>
//                     <Button> Check In</Button>
//                     <Button> Check Out</Button>

//                 </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.closeModal}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//             </>

//         );
//     }

// }



export default CreateProjectPopUp;