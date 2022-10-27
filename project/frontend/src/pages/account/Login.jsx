import React from 'react'
import { LoginDialog } from '../../components/account'

function LoginPage() {
  const handleLogin = payload => {
    console.log(payload);
  }
  
  return (
    <>
      <h1 className='fw-bold mb-4'>User Login</h1>
      <LoginDialog onLogin={handleLogin} />
    </>
  )
}

LoginPage.propTypes = {}

export { LoginPage }