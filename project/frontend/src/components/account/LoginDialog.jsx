import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginDialog(props) {
  const { submitting, onLogin } = props;
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    if (form.checkValidity() === false) return;

    const fd = new FormData(form);
    onLogin({
      email: fd.get('f-email'),
      pwd: fd.get('f-pwd'),
    });
  }

  return (
    <Card style={{width: '320px'}}>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='login-email'>
            <Form.Control type='email' name='f-email' placeholder='Email' required />
            <Form.Control.Feedback type='invalid'>Please enter a valid email.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='login-pwd'>
            <Form.Control type='password' name='f-pwd' placeholder='Password' required />
            <Form.Control.Feedback type='invalid'>Please enter your password.</Form.Control.Feedback>
          </Form.Group>
          <hr/>
          <div className="d-grid">
            <Button variant='primary' type='submit'>
              {
                submitting
                  ? <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  : 'Login'
              }
            </Button>
          </div>
          <div className='text-center mt-2'>
            <span className='text-muted small'>No account?</span>
            {' '}
            <Link to='../register' className='small'>Create Account</Link>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

LoginDialog.propTypes = {
  submitting: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
}

export { LoginDialog };
