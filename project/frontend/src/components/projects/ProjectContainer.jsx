import PropTypes from 'prop-types'
import React from 'react'
import { Button, Col, Row, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { checkInHardware, checkOutHardware } from '../../actions/hardware'
import {
  addProject,
  closeDetailModal,
  deleteProject,
  editProject,
  getProject,
  joinProject,
  leaveProject,
  openDetailModal
} from '../../actions/project'
import { ProjectPanel } from './cell'
import { ProjectDetailPopup } from './popups'

const ConnectProjectContainer = (props) => {
  const {
    loading, detailModalShow,
    userId, projects, currentProjectId,
    getProject, addProject, editProject, deleteProject,
    joinProject, leaveProject, checkInHardware, checkOutHardware,
    closeDetailModal, openDetailModal,
  } = props;

  const handleOpenDetail = id => openDetailModal({ projectId: id });

  const onCreateProject = data => {
    console.log('create project', data);
    addProject(data);
  };

  const onEditProject = (projectId, data) => {
    console.log(`edit project ${projectId}`, data);
    editProject({ projectId, data });
  };

  const onDeleteProject = projectId => {
    console.log(`delete project ${projectId}`);
    deleteProject({ projectId });
  };

  const onJoinProject = projectId => {
    console.log(`join project ${projectId}`);
    joinProject({ userId, projectId });
  };

  const onLeaveProject = projectId => {
    console.log(`leave project ${projectId}`);
    leaveProject({ userId, projectId });
  };

  const onCheckInProject = (projectId, hwId, amount) => {
    console.log(`check in ${amount} hardware ${hwId} in project ${projectId}`);
    checkInHardware({
      userId, projectId, hwId,
      data: { amount },
    });
  };

  const onCheckOutProject = (projectId, hwId, amount) => {
    console.log(`check out ${amount} hardware ${hwId} in project ${projectId}`);
    checkOutHardware({
      userId, projectId, hwId,
      data: { amount },
    });
  };

  // test
  console.log(
    userId,
    getProject,
    onCreateProject,
    onEditProject,
    onDeleteProject,
    onJoinProject,
    onLeaveProject,
    onCheckInProject,
    onCheckOutProject,
  );

  // useEffect(() => {
  //   getProject({ userId });
  // }, []);
  

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
      {
        loading
          ? <span className='d-flex h-100 justify-content-center align-item center'>
            <Spinner
              animation='border'
              variant='primary'
              style={{
                width: '3rem',
                height: '3rem',
              }}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </span>
          : <Row className='g-4'>
            {
              projects.map(p => (
                <Col sm={6} xl={4} key={p.id}>
                  <ProjectPanel project={p} onOpenDetail={handleOpenDetail} />
                </Col>
              ))
            }
          </Row>
      }
      <ProjectDetailPopup
        show={detailModalShow}
        projectId={currentProjectId}
        projects={projects}
        onClose={closeDetailModal} />
    </>
  )
}

ConnectProjectContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  detailModalShow: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  currentProjectId: PropTypes.number.isRequired,
  getProject: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
  editProject: PropTypes.func.isRequired,
  joinProject: PropTypes.func.isRequired,
  leaveProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  checkInHardware: PropTypes.func.isRequired,
  checkOutHardware: PropTypes.func.isRequired,
  openDetailModal: PropTypes.func.isRequired,
  closeDetailModal: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.project.loading,
  detailModalShow: state.project.detailModalShow,
  userId: state.global.email,
  projects: state.project.projects,
  currentProjectId: state.project.currentProjectId,
})

const mapDispatchToProps = {
  getProject,
  addProject,
  editProject,
  deleteProject,
  joinProject,
  leaveProject,
  checkInHardware,
  checkOutHardware,
  openDetailModal,
  closeDetailModal,
}

export const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(ConnectProjectContainer)