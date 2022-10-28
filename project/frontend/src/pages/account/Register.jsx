import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { RegisterDialog } from '../../components/account';
import { checkLogin } from '../../actions/global';

function ConnectRegisterPage(props) {
  const { loggedIn, checkLogin } = props;
  const navigate = useNavigate();

  const handleRegister = payload => {
    console.log(payload);
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
      <RegisterDialog onRegister={handleRegister} />
    </>
  )
}

ConnectRegisterPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  errorToastShow: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  checkLogin: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.global.loading,
  loggedIn: state.global.loggedIn,
  errorToastShow: state.global.errorToastShow,
  error: state.global.error,
});

const mapDispatchToProps = {
  checkLogin,
};

export const RegisterPage = connect(mapStateToProps, mapDispatchToProps)(ConnectRegisterPage);
