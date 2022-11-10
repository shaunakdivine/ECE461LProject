import React from 'react';
import { connect } from 'react-redux';
import { Button, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import { checkLogin, logout } from '../../actions/global';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ConnectSidebar(props) {
  const { name, email, loggedIn, checkLogin, logout } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (route) => location.pathname.includes(route);
  
  useEffect(() => {
    checkLogin();
  }, [])

  // if not logged in, navigate to login page
  useEffect(() => {
    if (!loggedIn) {
      navigate('/account');
    }
  }, [loggedIn]);

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
            <Nav.Link active={location.pathname === '/'}>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as='li'>
          <LinkContainer to='/projects'>
            <Nav.Link active={isActive('/projects')}>All Projects</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        {/* <Nav.Item as='li'>
          <LinkContainer to='/hardware'>
            <Nav.Link active={isActive('/hardware')}>Hardware</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as='li'>
          <LinkContainer to='/settings'>
            <Nav.Link active={isActive('/settings')}>Settings</Nav.Link>
          </LinkContainer>
        </Nav.Item> */}
        <Nav.Item as='li'>
          <LinkContainer to='/about'>
            <Nav.Link active={isActive('/about')}>About</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
      <hr />
      {
        loggedIn
          ? <>
              <div className='mb-3'>
                {name}
                <div className='text-muted small'>{email}</div>
              </div>
              <Button as='button' variant='secondary' onClick={() => logout()}>Logout</Button>
            </>
          : <LinkContainer to='/account'>
              <Button as='button' variant='secondary'>User Login</Button>
            </LinkContainer>
      }
    </div>
  )
}

ConnectSidebar.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  checkLogin: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  name: state.global.name,
  email: state.global.email,
  loggedIn: state.global.loggedIn,
});

const mapDispatchToProps = {
  checkLogin,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectSidebar);
