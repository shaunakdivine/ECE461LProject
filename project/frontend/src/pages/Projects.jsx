import React from 'react';
import { BasePage } from '../components/utility';
import { Button, Containers,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import ProjectPanel from '../components/Projects/ProjectsComponent';
import ProjectContent from '../components/ProjectContent/ProjectContent'


function ProjectsPage(props) {
  return (
    <BasePage title='Projects'>
      <div class = "container-fluid"> 
        <input type = "search" class = "form-control rounder"  placeholder = "Search" aria-label = "Search" aria-describedby = "search-addon"/>
        <button type = "button" class = "btn btn-outline-primary">search</button>
      </div>
      <div> 
        <ProjectContent projectNum = "1" authorizedUsers = "list, of, authorized, users"></ProjectContent>
        <ProjectContent projectNum = "2" authorizedUsers = "list, of, authorized, users"></ProjectContent>
        <ProjectContent projectNum = "3" authorizedUsers = "list, of, authorized, users"></ProjectContent>
      </div>


    </BasePage>
  )
}

export { ProjectsPage }
