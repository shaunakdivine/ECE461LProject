import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap';

function BasePage(props) {
  const { title } = props;

  return (
    <Container className="p-5">
      <div className='h2'>{ title }</div>
      { props.children }
    </Container>
  )
}

BasePage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export { BasePage }
