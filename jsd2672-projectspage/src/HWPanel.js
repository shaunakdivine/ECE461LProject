import logo from './logo.svg';
import './HWPanel.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Button, TextField} from '@material-ui/core'
import StatusButton from './StatusButton';


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
                    <TextField> Enter Quantity </TextField>
                    <Button> Check In</Button>
                    <Button> Check Out</Button>

                </div>
            </div>
      
      
        );
      }
    }



export default HWPanel;