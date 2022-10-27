import React from 'react';
import { RegisterDialog } from '../../components/account';

function RegisterPage() {
  const handleRegister = payload => {
    console.log(payload);
  };

  return (
    <>
      <h1 className='fw-bold mb-4'>Create Account</h1>
      <RegisterDialog onRegister={handleRegister} />
    </>
  )
}

RegisterPage.propTypes = {}

export { RegisterPage };
