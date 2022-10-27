import React from 'react';
import { BasePage } from '../components/utility';
import { Button, Containers,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

function ProjectsPage(props) {
  return (
    <BasePage title='Projects'>
      <div class = "container-fluid"> 
        <input type = "search" class = "form-control rounder"  placeholder = "Search" aria-label = "Search" aria-describedby = "search-addon"/>
        <button type = "button" class = "btn btn-outline-primary">search</button>
      </div>
    </BasePage>
  )
}

export { ProjectsPage }
