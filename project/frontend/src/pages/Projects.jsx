import React from 'react';
import { BasePage } from '../components/utility';
<<<<<<< HEAD
import { Button, Containers,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
=======
import { Container } from 'react-bootstrap';
import ProjectPanel from '../components/Projects/ProjectsComponent';

>>>>>>> 44617d07d0d7ce64a6e68c40432eacc014189c69

function ProjectsPage(props) {
  return (
    <BasePage title='Projects'>
<<<<<<< HEAD
      <div class = "container-fluid"> 
        <input type = "search" class = "form-control rounder"  placeholder = "Search" aria-label = "Search" aria-describedby = "search-addon"/>
        <button type = "button" class = "btn btn-outline-primary">search</button>
      </div>
=======
      <div className="project-container">
        <h1 className = "project-header"> Projects </h1>
        <div className="project-panel">
          <ProjectPanel projectName="Project 1"> Project 1</ProjectPanel>
          <ProjectPanel projectName="Project 2"> Project 2</ProjectPanel> 
          <ProjectPanel projectName="Project 3"> Project 3</ProjectPanel>
    
        </div>
      </div>  
>>>>>>> 44617d07d0d7ce64a6e68c40432eacc014189c69
    </BasePage>
  )
}

export { ProjectsPage }
