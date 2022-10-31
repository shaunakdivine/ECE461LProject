import React from 'react';
import { BasePage } from '../components/utility';
import { Button, Containers,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import ProjectPanel from '../components/Projects/ProjectsComponent';
import ProjectContent from '../components/ProjectContent/ProjectContent'
import CreateProjectPopUp from "../components/CreateProjectPopUp/CreateProjectPopUp"


function ProjectsPage(props) {
  return (
    <BasePage title='Projects'>
      <div class = "container-fluid"> 
        <input type = "search" class = "form-control rounder"  placeholder = "Search" aria-label = "Search" aria-describedby = "search-addon"/>
        <button type = "button" class = "btn btn-outline-primary">search</button>
      </div>
      <div>
        <container>
          {/* <button type = "button" class = "btn btn-outline-primary" style={{marginTop: "1%"}}>Create Project</button> */}
          <CreateProjectPopUp></CreateProjectPopUp>
          <button type = "button" class = "btn btn-outline-primary" style={{marginTop: "1%", marginLeft: "1%"}}>Delete Project</button>
        </container>
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
