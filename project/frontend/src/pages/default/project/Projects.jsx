import React from 'react';
import { BasePage } from '../../../components/utility';
import ProjectPanel from '../../../components/Projects/ProjectsComponent';
import { Button, Form, InputGroup } from 'react-bootstrap';

function ProjectsPage() {
  return (
    <BasePage title='Projects'>
      <InputGroup className='mb-3'>
        <Form.Control
          type='search'
          placeholder='Search Projects...'
          aria-label='Search'
          aria-describedby='search-input-box' />
        <Button variant='outline-primary'>Search</Button>
      </InputGroup>
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
