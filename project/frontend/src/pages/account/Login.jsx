import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoginDialog } from '../../components/account';
import { login, checkLogin, closeToast } from '../../actions/global';
import { AlertToast } from '../../components/general/popups';
import { useNavigate } from 'react-router-dom';

function ConnectLoginPage(props) {
  const {
    loading, loggedIn, errorToastShow, error,
    login, checkLogin, closeToast
  } = props;
  const navigate = useNavigate();

  const handleLogin = payload => {
    console.log(payload);
    login(payload);
  }

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (loggedIn) navigate('/');
  }, [loggedIn]);
  
  return (
    <>
      <h1 className='fw-bold mb-4'>User Login</h1>
      <LoginDialog submitting={loading} onLogin={handleLogin} />
      <AlertToast
        show={errorToastShow}
        variant='danger'
        timeout={2000}
        content={error}
        onClose={closeToast} />
    </>
  )
}

ConnectLoginPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  errorToastShow: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  checkLogin: PropTypes.func.isRequired,
  closeToast: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.global.loading,
  loggedIn: state.global.loggedIn,
  errorToastShow: state.global.errorToastShow,
  error: state.global.error,
});

const mapDispatchToProps = {
  login,
  checkLogin,
  closeToast,
};

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(ConnectLoginPage)