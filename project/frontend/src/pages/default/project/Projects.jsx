import React from 'react';
import { Link } from 'react-router-dom';
import { BasePage } from '../../../components/utility';

function ProjectsPage() {
  return (
    <BasePage title='Projects'>
      <div>put all the components here</div>
      <Link to='./9527'>Project Detail Page with ID #9527</Link>
    </BasePage>
  )
}

export { ProjectsPage }
