import React from 'react';
import { BasePage } from '../components/utility';
import { Container } from 'react-bootstrap';
import ProjectPanel from '../components/Projects/ProjectsComponent';


function ProjectsPage(props) {
  return (
    <BasePage title='Projects'>
      <div className="project-container">
        <h1 className = "project-header"> Projects </h1>
        <div className="project-panel">
          <ProjectPanel projectName="Project 1"> Project 1</ProjectPanel>
          <ProjectPanel projectName="Project 2"> Project 2</ProjectPanel> 
          <ProjectPanel projectName="Project 3"> Project 3</ProjectPanel>
    
        </div>
      </div>  
    </BasePage>
  )
}

export { ProjectsPage }
