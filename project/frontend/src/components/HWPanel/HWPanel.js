
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HWPanel.css';
import React from 'react';
//import {Button, TextField} from '@material-ui/core'

class HWPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className = "HWPanel-container">
                <div className="HWPanel-text">
                    <p> HWSet: 50/100</p>
        
                </div>
                <div className = "HWPanel-buttons">
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
        );
    }
}



export default HWPanel;