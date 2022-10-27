import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoginDialog } from '../../components/account';
import { login, closeToast } from '../../actions/global';
import { AlertToast } from '../../components/general/popups';

function ConnectLoginPage(props) {
  const { loading, errorToastShow, error, login, closeToast } = props;

  const handleLogin = payload => {
    console.log(payload);
    login(payload);
  }
  
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
  errorToastShow: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  closeToast: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.global.loading,
  errorToastShow: state.global.errorToastShow,
  error: state.global.error,
});

const mapDispatchToProps = {
  login,
  closeToast,
};

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(ConnectLoginPage)