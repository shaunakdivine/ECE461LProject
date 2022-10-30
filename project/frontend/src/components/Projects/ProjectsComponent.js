import './Projects.css';
import React from 'react';
import StatusButton from '../StatusButton/StatusButton';
import HWPanel from '../HWPanel/HWPanel';
import PropTypes from 'prop-types'

class ProjectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "project"
    };
  }

  render() {
    const projectName = this.props.projectName;
    return (
      <div className='panel-container'>
        <div className="panel-button">
          <StatusButton isJoined={true} initialText="Join"></StatusButton>
        </div>
        <div className="panel-HW">
          <HWPanel></HWPanel>
          <HWPanel></HWPanel>
        </div>
        <div className="users">
          <p> list, of, authorized, users</p>
        </div>

        <div className="title">
          <h3> {projectName} </h3>
        </div>
      </div>
    );
  }
}

ProjectPanel.propTypes = {
  projectName: PropTypes.string.isRequired
}

export default ProjectPanel;