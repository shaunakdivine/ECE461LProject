import React from 'react';
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { useLocation } from 'react-router-dom';

function Sidebar(props) {
  // const location = useLocation();

  return (
    <div className='w-100 d-flex flex-column flex-shrink-0 p-3 bg-light'>
      <Link
        to='/'
        className='d-flex align-items-center me-md-auto link-dark text-decoration-none'>
        <span className="fs-5 fw-semibold">ECE461L</span>
      </Link>
      <hr />
      <Nav
        className='flex-column mb-auto'
        variant='pills'
        as='ul'>
        <Nav.Item as='li'>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as='li'>
          <LinkContainer to='/projects'>
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as='li'>
          <LinkContainer to='/hardware'>
            <Nav.Link>Hardware</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as='li'>
          <LinkContainer to='/settings'>
            <Nav.Link>Settings</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
      <hr />
      <div>
        Han-Hsuan Lin
        <div className='text-muted small'>hhl@utexas.edu</div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {}

export { Sidebar }
