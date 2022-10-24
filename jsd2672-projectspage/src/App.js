import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Button} from '@material-ui/core'
import ProjectPanel from './Projects';
import StatusButton from './StatusButton';



class App extends React.Component {
  render() {
    return (
      <div className="project-container">
        <h1 className = "project-header"> Projects </h1>
        <div className="project-panel">
          <ProjectPanel projectName="Project 1"> Project 1</ProjectPanel>
          <ProjectPanel projectName="Project 2"> Project 2</ProjectPanel> 
          <ProjectPanel projectName="Project 3"> Project 3</ProjectPanel>
    
        </div>
      </div>  
    );
  }
}

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  
  export default App;
