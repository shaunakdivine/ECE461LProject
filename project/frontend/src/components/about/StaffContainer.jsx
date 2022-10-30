import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Row } from 'react-bootstrap'

function StaffContainer(props) {
  const { className, groupTitle, staffs } = props

  return (
    <div className={className}>
      <div className="h4 mb-3">{groupTitle}</div>
      <Row>
        {
          staffs.map((staff, i) => (
            <Col md={4} key={i}>
              <Card className='text-center'>
                <Card.Img variant='top' src={staff.imgurl} alt={`Profile photo of ${staff.name}`} />
                <Card.Body>
                  <Card.Title>{staff.name}</Card.Title>
                  <Card.Text>{staff.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

StaffContainer.propTypes = {
  className: PropTypes.string,
  groupTitle: PropTypes.string.isRequired,
  staffs: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export { StaffContainer };