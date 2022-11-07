import React from 'react';
import { BasePage } from '../../../components/utility';
import { ProjectContainer } from '../../../components/projects';

function ProjectsPage() {
  return (
    <BasePage title='Projects'>
      <ProjectContainer />
    </BasePage>
  )
}

export { ProjectsPage }
