import logo from './logo.svg';
import './Projects.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Button} from '@material-ui/core'
import StatusButton from './StatusButton';
import HWPanel from './HWPanel';


class ProjectPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projectName: "project"
      };
    }
    
    render(){
        const projectName = this.props.projectName;


      return (
        <div className='panel-container'>
           

            <div className="panel-button">
            <StatusButton isJoined={true} initialText = "Join"></StatusButton>
            </div>
            <div className="panel-HW">
                <HWPanel></HWPanel>
                <HWPanel></HWPanel>
            </div>
            <div className = "users">
            <p> list, of, authorized, users</p>
            </div>

            <div className = "title">
                <h3> {projectName} </h3>
            </div>
        </div>
    
    
      );
    }
    }

export default ProjectPanel;