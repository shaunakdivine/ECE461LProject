import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class HWPopUp extends React.Component {

    state = {
        isOpen: false
      };
    
      openModal = () => this.setState({ isOpen: true });
      closeModal = () => this.setState({ isOpen: false });

    render(){
        return (
          <>
            <Button type="button" data-toggle="modal" data-target="#exampleModal" onClick={this.openModal}>
              See Hardware Details
            </Button>
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Hardware Details for Project 1</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="HWPanel-container">
                  <div className="HWPanel-text">
                    <p> HWSet: *HW number placeholder*</p>

                  </div>
                  <div className="HWPanel-buttons">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Enter Quantity:</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                    <Button> Check In</Button>
                    <Button> Check Out</Button>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    }
}



export default HWPopUp;