
import { Button, Container } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './HWPanel.css';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
//import {Button, TextField} from '@material-ui/core'



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



export default ProjectContent;