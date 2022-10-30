import React from 'react';
import { connect } from 'react-redux';
import { Button, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import { checkLogin } from '../../actions/global';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function ConnectSidebar(props) {
  const { loggedIn, checkLogin } = props;
  // const navigate = useNavigate();
  
  useEffect(() => {
    checkLogin();
  }, [])

  // if not logged in, navigate to login page
  // useEffect(() => {
  //   if (!loggedIn) {
  //     navigate('/account');
  //   }
  // }, [loggedIn]);

  return (
    <div className='w-100 d-flex flex-column flex-shrink-0 p-3 bg-light'>
      <div className="fs-5 fw-semibold">ECE461L</div>
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
        <Nav.Item as='li'>
          <LinkContainer to='/about'>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
      <hr />
      {
        loggedIn
          ? <div>
              Han-Hsuan Lin
              <div className='text-muted small'>hhl@utexas.edu</div>
            </div>
          : <LinkContainer to='/account'>
              <Button as='button' variant='secondary'>User Login</Button>
            </LinkContainer>
      }
    </div>
  )
}

ConnectSidebar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  checkLogin: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loggedIn: state.global.loggedIn,
});

const mapDispatchToProps = {
  checkLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectSidebar);
