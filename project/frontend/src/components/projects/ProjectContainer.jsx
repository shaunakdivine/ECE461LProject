import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Button, Col, Row, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { closeToast } from '../../actions/global'
import {
  addAuthUser,
  addProject,
  checkinHW,
  checkoutHW,
  closeAddAuthUserModal,
  closeAddModal,
  closeDeleteDialog,
  closeDetailModal,
  closeEditModal,
  deleteProject,
  editProject,
  getProject,
  joinProject,
  leaveProject,
  openAddAuthUserModal,
  openAddModal,
  openDeleteDialog,
  openDetailModal,
  openEditModal
} from '../../actions/project'
import { AlertToast } from '../general/popups'
import { ProjectPanel } from './cell'
import { ProjectDetailPopup, CreateProjectPopup, EditProjectPopup, DeleteProjectPopup, AddUserPopup } from './popups'

const ConnectProjectContainer = (props) => {
  const {
    loading, submitting, errorToastShow, error,
    addModalShow, editModalShow, addAuthUserModalShow, detailModalShow, deleteDialogShow,
    userId, projects, currentProjectId,
    getProject, addProject, editProject, deleteProject,
    joinProject, leaveProject, checkinHW, checkoutHW, addAuthUser,
    openAddModal, openEditModal, openDetailModal, openDeleteDialog, openAddAuthUserModal,
    closeAddModal, closeEditModal, closeDetailModal, closeDeleteDialog, closeAddAuthUserModal,
    closeToast,
  } = props;

  const handleOpenDetail = id => openDetailModal({ projectId: id });

  const onCreateProject = data => {
    console.log('create project', data);
    addProject({ userId, data });
  };

  const onEditProject = data => {
    console.log(`edit project ${currentProjectId}`, data);
    editProject({ userId, projectId: currentProjectId, data });
  };

  const onDeleteProject = () => {
    console.log(`delete project ${currentProjectId}`);
    deleteProject({ userId, projectId: currentProjectId });
  };

  const onJoinProject = projectId => {
    console.log(`join project ${projectId}`);
    joinProject({ userId, projectId });
  };

  const onLeaveProject = projectId => {
    console.log(`leave project ${projectId}`);
    leaveProject({ userId, projectId });
  };

  const onCheckInProject = ({ projectId, data }) => {
    console.log(`check in ${data.amount} hardware ${data.hwsetId} in project ${projectId}`);
    checkinHW({ userId, projectId, data });
  };

  const onCheckOutProject = ({ projectId, data }) => {
    console.log(`check out ${data.amount} hardware ${data.hwsetId} in project ${projectId}`);
    checkoutHW({ userId, projectId, data });
  };

  const onAddAuthUser = newUserId => {
    console.log(`add auth user of project ${currentProjectId} by ${userId} adding ${newUserId}`);
    addAuthUser({ projectId: currentProjectId, masterId: userId, newUserId });
  }

  // test
  console.debug(
    onCheckInProject,
    onCheckOutProject,
    editProject,
    onAddAuthUser,
  );

  useEffect(() => {
    getProject({ userId });
  }, []);

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
          <Button className='w-100' onClick={openAddModal}>Add Project</Button>
        </Col>
        <Col>
          <Button variant='secondary' onClick={() => getProject({ userId })}>Resresh</Button>
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
                  <ProjectPanel
                    submitting={submitting && currentProjectId === p.id}
                    project={p}
                    onJoin={onJoinProject}
                    onLeave={onLeaveProject}
                    onOpenDetail={handleOpenDetail} />
                </Col>
              ))
            }
          </Row>
      }
      <ProjectDetailPopup
        show={detailModalShow}
        submitting={submitting}
        userId={userId}
        projectId={currentProjectId}
        projects={projects}
        onOpenEditModal={openEditModal}
        onOpenDeleteDialog={openDeleteDialog}
        onOpenAddAuthUserModal={openAddAuthUserModal}
        onCheckIn={onCheckInProject}
        onCheckOut={onCheckOutProject}
        onClose={closeDetailModal} />
      <DeleteProjectPopup 
        show={deleteDialogShow}
        submitting={submitting}
        onDeleteProject={onDeleteProject}
        onClose={closeDeleteDialog} />
      <CreateProjectPopup
        show={addModalShow}
        submitting={submitting}
        onSubmission={onCreateProject}
        onClose={closeAddModal} />
      <EditProjectPopup
        show={editModalShow}
        projectId={currentProjectId}
        projects={projects}
        submitting={submitting}
        onSubmission={onEditProject}
        onClose={closeEditModal} />
      <AddUserPopup
        show={addAuthUserModalShow}
        submitting={submitting}
        onSubmission={onAddAuthUser}
        onClose={closeAddAuthUserModal} />
      <AlertToast
        show={errorToastShow}
        variant='danger'
        timeout={2000}
        content={error}
        onClose={closeToast} />
    </>

  )
}

ConnectProjectContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  addModalShow: PropTypes.bool.isRequired,
  editModalShow: PropTypes.bool.isRequired,
  addAuthUserModalShow: PropTypes.bool.isRequired,
  detailModalShow: PropTypes.bool.isRequired,
  deleteDialogShow: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  currentProjectId: PropTypes.number.isRequired,
  errorToastShow: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  getProject: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
  editProject: PropTypes.func.isRequired,
  joinProject: PropTypes.func.isRequired,
  leaveProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  checkinHW: PropTypes.func.isRequired,
  checkoutHW: PropTypes.func.isRequired,
  addAuthUser: PropTypes.func.isRequired,
  openAddModal: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired,
  openDetailModal: PropTypes.func.isRequired,
  openDeleteDialog: PropTypes.func.isRequired,
  openAddAuthUserModal: PropTypes.func.isRequired,
  closeAddModal: PropTypes.func.isRequired,
  closeEditModal: PropTypes.func.isRequired,
  closeAddAuthUserModal: PropTypes.func.isRequired,
  closeDetailModal: PropTypes.func.isRequired,
  closeDeleteDialog: PropTypes.func.isRequired,
  closeToast: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.project.loading,
  submitting: state.project.submitting,
  addModalShow: state.project.addProjectModalShow,
  editModalShow: state.project.editProjectModalShow,
  addAuthUserModalShow: state.project.addAuthUserModalShow,
  detailModalShow: state.project.detailModalShow,
  deleteDialogShow: state.project.deleteProjectDialogShow,
  projects: state.project.projects,
  currentProjectId: state.project.currentProjectId,
  errorToastShow: state.global.errorToastShow,
  error: state.global.error,
  userId: state.global.email,
})

const mapDispatchToProps = {
  getProject,
  addProject,
  editProject,
  deleteProject,
  joinProject,
  leaveProject,
  checkinHW,
  checkoutHW,
  addAuthUser,
  openAddModal,
  openEditModal,
  openDetailModal,
  openDeleteDialog,
  openAddAuthUserModal,
  closeAddModal,
  closeEditModal,
  closeAddAuthUserModal,
  closeDetailModal,
  closeDeleteDialog,
  closeToast,
}

export const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(ConnectProjectContainer)