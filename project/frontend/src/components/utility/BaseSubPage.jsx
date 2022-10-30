import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BaseSubPage(props) {
  const { title } = props;

  return (
    <Container className="p-5">
      <Link to=".." relative='path'>Back</Link>
      <div className='h2'>{title}</div>
      {props.children}
    </Container>
  )
}

BaseSubPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export { BaseSubPage }
