import React from 'react';
import { useParams } from 'react-router-dom';
import { BaseSubPage } from '../../../components/utility';

function ProjectsDetailPage() {
  const { projectId } = useParams();

  return (
    <BaseSubPage title={`Project ${projectId}`}>
      <div>Project { projectId }</div>
    </BaseSubPage>
  )
}

export { ProjectsDetailPage }
