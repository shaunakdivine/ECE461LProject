
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HWPanel.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import {Button, TextField} from '@material-ui/core'



class HWPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render(){
        return (
            <div className = "HWPanel-container">
                <div className="HWPanel-text">
                    <p> HWSet: 50/100</p>
        
                </div>
                <div className = "HWPanel-buttons">
                    <p> Enter Quantity </p>
                    <Button> Check In</Button>
                    <Button> Check Out</Button>

                </div>
            </div>
      
      
        );
      }
    }



export default HWPanel;