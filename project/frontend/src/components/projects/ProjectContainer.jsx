import PropTypes from 'prop-types'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { closeDetailModal, openDetailModal } from '../../actions/project'
import { ProjectPanel } from './cell'
import { ProjectDetailPopup } from './popups'

const ConnectProjectContainer = (props) => {
  const {
    detailModalShow, projects, currentProjectId,
    closeDetailModal, openDetailModal,
  } = props;

  const handleOpenDetail = id => openDetailModal({ projectId: id });

  return (
    <>
      <Row className='mb-3'>
        {/* <Col md={8}>
          <InputGroup>
            <Form.Control
              type='search'
              placeholder='Search Projects...'
              aria-label='Search'
              aria-describedby='search-input-box' />
            <Button variant='outline-primary'>Search</Button>
          </InputGroup>
        </Col> */}
        <Col md={4} lg={3}>
          <Button className='w-100'>Add Project</Button>
        </Col>
      </Row>
      <Row className='g-4'>
        {
          projects.map(p => (
            <Col sm={6} xl={4} key={p.id}>
              <ProjectPanel project={p} onOpenDetail={handleOpenDetail} />
            </Col>
          ))
        }
      </Row>
      <ProjectDetailPopup
        show={detailModalShow}
        projectId={currentProjectId}
        projects={projects}
        onClose={closeDetailModal} />
    </>
  )
}

ConnectProjectContainer.propTypes = {
  detailModalShow: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  currentProjectId: PropTypes.number.isRequired,
  openDetailModal: PropTypes.func.isRequired,
  closeDetailModal: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  detailModalShow: state.project.detailModalShow,
  projects: state.project.projects,
  currentProjectId: state.project.currentProjectId,
})

const mapDispatchToProps = {
  openDetailModal,
  closeDetailModal,
}

export const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(ConnectProjectContainer)