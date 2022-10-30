import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { RegisterDialog } from '../../components/account';
import { checkLogin, register, closeToast } from '../../actions/global';
import { AlertToast } from '../../components/general/popups';

function ConnectRegisterPage(props) {
  const {
    loading, loggedIn, errorToastShow, error,
    checkLogin, register, closeToast,
  } = props;
  const navigate = useNavigate();

  const handleRegister = payload => {
    console.log(payload);
    register(payload);
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (loggedIn) navigate('/');
  }, [loggedIn]);

  return (
    <>
      <h1 className='fw-bold mb-4'>Create Account</h1>
      <RegisterDialog submitting={loading} onRegister={handleRegister} />
      <AlertToast
        show={errorToastShow}
        variant='danger'
        timeout={2000}
        content={error}
        onClose={closeToast} />
    </>
  )
}

ConnectRegisterPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  errorToastShow: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  checkLogin: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  closeToast: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.global.loading,
  loggedIn: state.global.loggedIn,
  errorToastShow: state.global.errorToastShow,
  error: state.global.error,
});

const mapDispatchToProps = {
  checkLogin,
  register,
  closeToast,
};

export const RegisterPage = connect(mapStateToProps, mapDispatchToProps)(ConnectRegisterPage);
