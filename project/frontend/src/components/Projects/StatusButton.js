import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function StatusButton() {
  const [joined, setJoined] = useState(false);

      return (
        <div className='w-100'>
          <Button
            className='w-100'
            variant={ joined ? 'danger' : 'primary'}
            onClick={() => setJoined(prev => !prev)}>
            {
              joined
              ? 'Leave'
              : 'Join'
            }
          </Button>
        </div>
      );

}

StatusButton.defaultProps = {
    isJoined: false
}

export default StatusButton;