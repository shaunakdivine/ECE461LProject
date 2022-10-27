import React from 'react'
import styles from './loginLayout.module.scss';
import { Container } from 'react-bootstrap'
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages/account';

function LoginLayout() {
  // useRoute

  return (
    <main className={`${styles.main} bg-light`}>
      <Container className='p-5 h-100 d-flex flex-column align-items-center justify-content-center'>
        <Routes>
          <Route path='/' element={<Navigate replace to='./login' />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Container>
    </main>
  )
}

export { LoginLayout };
