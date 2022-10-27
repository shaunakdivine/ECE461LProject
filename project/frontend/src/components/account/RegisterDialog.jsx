import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RegisterDialog(props) {
  const { onRegister } = props;
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    if (form.checkValidity() === false) return;

    const fd = new FormData(form);
    onRegister({
      fname: fd.get('f-fname'),
      lname: fd.get('f-lname'),
      email: fd.get('f-email'),
      pwd: fd.get('f-pwd'),
    });
  }

  return (
    <Card style={{ width: '320px' }}>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='login-fname'>
            <Form.Control type='text' name='f-fname' placeholder='First Name' required />
            <Form.Control.Feedback type='invalid'>Please enter your first name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='login-lname'>
            <Form.Control type='text' name='f-lname' placeholder='Last Name' required />
            <Form.Control.Feedback type='invalid'>Please enter your last name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='login-email'>
            <Form.Control type='email' name='f-email' placeholder='Email' required />
            <Form.Control.Feedback type='invalid'>Please enter a valid email.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='login-pwd'>
            <Form.Control type='password' name='f-pwd' placeholder='Password' required />
            <Form.Control.Feedback type='invalid'>Please enter your password.</Form.Control.Feedback>
          </Form.Group>
          <hr />
          <div className="d-grid">
            <Button variant='primary' type='submit'>Create Account</Button>
          </div>
          <div className='text-center mt-2'>
            <span className='text-muted small'>Already have account?</span>
            {' '}
            <Link to='../login' className='small'>Login</Link>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

RegisterDialog.propTypes = {
  onRegister: PropTypes.func.isRequired,
}

export { RegisterDialog };