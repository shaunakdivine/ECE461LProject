import { Button, Container } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';



function ProjectContent(props){
  const projectNum = props.projectNum
  const authorizedUsers = props.authorizedUsers
  const [jlBut, setjlBut] = useState("Join");
  return (
    <div>
      <div style={{ marginLeft: '5%', marginTop: '60px', width: '95%' }}>
        <Container class="p-3 mb-2 bg-info text-white">
          <h2>Project Name {projectNum}-
            <Button
              onClick={() => setjlBut(jlBut == 'Join' ? 'Leave' : 'Join')}> {jlBut}
            </Button>
          </h2> {authorizedUsers}
        </Container>
      </div>
    </div>
  );
}

ProjectContent.propTypes = {
  projectNum: PropTypes.number.isRequired,
  authorizedUsers: PropTypes.string.isRequired,
}


export default ProjectContent;