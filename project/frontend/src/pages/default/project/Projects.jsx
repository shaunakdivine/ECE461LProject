import React from 'react';
import { Link } from 'react-router-dom';
import { BasePage } from '../../../components/utility';
import ProjectPanel from '../../../components/Projects/ProjectsComponent';

function ProjectsPage() {
  return (
    <BasePage title='Projects'>
      <div>put all the components here</div>
      <Link to='./9527'>Project Detail Page with ID #9527</Link>
      <input type="search" className="form-control rounder" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <button type="button" className="btn btn-outline-primary">search</button>
      <div className="project-container">
        <div className="project-panel">
          <ProjectPanel projectName="Project 1">Project 1</ProjectPanel>
          <ProjectPanel projectName="Project 2">Project 2</ProjectPanel>
          <ProjectPanel projectName="Project 3">Project 3</ProjectPanel>
        </div>
      </div>
    </BasePage>
  )
}

export { ProjectsPage }
