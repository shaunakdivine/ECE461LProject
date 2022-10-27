import React from 'react'
import PropTypes from 'prop-types'
import { Toast, ToastContainer, CloseButton } from 'react-bootstrap';

export function AlertToast(props) {
  const {
    show, variant, timeout, content,
    onClose,
  } = props;

  return (
    <ToastContainer className='p-5' position='top-center'>
      <Toast
        className={`bg-${variant} ${variant === 'light' ? 'text-dark' : 'text-white'}`}
        show={show}
        onClose={onClose}
        delay={timeout}
        autohide>
        <div className="d-flex align-items-center">
          <Toast.Body>{content}</Toast.Body>
          <CloseButton className='me-2 m-auto' variant='white' onClick={onClose} />
        </div>
      </Toast>
    </ToastContainer>
  )
}

AlertToast.propTypes = {
  show: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]).isRequired,
  timeout: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};