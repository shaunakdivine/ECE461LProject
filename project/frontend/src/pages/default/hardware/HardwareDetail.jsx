import React from 'react';
import { useParams } from 'react-router-dom';
import { BaseSubPage } from '../../../components/utility';

function HardwareDetailPage() {
  const { hwId } = useParams();

  return (
    <BaseSubPage title={`Hardware ${hwId}`}>
      <div>Hardware {hwId}</div>
    </BaseSubPage>
  )
}

export { HardwareDetailPage }
