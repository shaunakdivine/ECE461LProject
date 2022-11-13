import {
  PROJECT_ADD,
  PROJECT_ADD_FAIL,
  PROJECT_ADD_SUCCESS,
  PROJECT_CLOSE_ADD_MODAL,
  PROJECT_CLOSE_DELETE_DIALOG,
  PROJECT_CLOSE_DETAIL_MODAL,
  PROJECT_CLOSE_EDIT_MODAL,
  PROJECT_DELETE,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_SUCCESS,
  PROJECT_EDIT,
  PROJECT_EDIT_FAIL,
  PROJECT_EDIT_SUCCESS,
  PROJECT_GET,
  PROJECT_GET_FAIL,
  PROJECT_GET_SUCCESS,
  PROJECT_HW_CHECK_IN,
  PROJECT_HW_CHECK_IN_FAIL,
  PROJECT_HW_CHECK_IN_SUCCESS,
  PROJECT_HW_CHECK_OUT,
  PROJECT_HW_CHECK_OUT_FAIL,
  PROJECT_HW_CHECK_OUT_SUCCESS,
  PROJECT_JOIN,
  PROJECT_JOIN_FAIL,
  PROJECT_JOIN_SUCCESS,
  PROJECT_LEAVE,
  PROJECT_LEAVE_FAIL,
  PROJECT_LEAVE_SUCCESS,
  PROJECT_OPEN_ADD_MODAL,
  PROJECT_OPEN_DELETE_DIALOG,
  PROJECT_OPEN_DETAIL_MODAL,
  PROJECT_OPEN_EDIT_MODAL
} from "../actions/types/project"

const initialState = {
  loading: false,  // whole page reloading
  submitting: false,  // operation submitting
  addProjectModalShow: false,
  editProjectModalShow: false,
  deleteProjectDialogShow: false,
  detailModalShow: false,
  projects: [],
  currentProjectId: -1,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROJECT_GET:
      return { ...state, loading: true }

    case PROJECT_ADD:
    case PROJECT_EDIT:
    case PROJECT_DELETE:
    case PROJECT_HW_CHECK_IN:
    case PROJECT_HW_CHECK_OUT:
      return { ...state, submitting: true }

    case PROJECT_JOIN:
    case PROJECT_LEAVE:
      return { ...state, submitting: true, currentProjectId: payload.projectId }

    case PROJECT_GET_SUCCESS:
      return { ...state, loading: false, projects: payload.projects }

    case PROJECT_ADD_SUCCESS:
    case PROJECT_EDIT_SUCCESS:
    case PROJECT_JOIN_SUCCESS:
    case PROJECT_LEAVE_SUCCESS:
    case PROJECT_HW_CHECK_IN_SUCCESS:
    case PROJECT_HW_CHECK_OUT_SUCCESS:
      return { ...state, submitting: false }
    
    case PROJECT_DELETE_SUCCESS:
      return { ...state, submitting: false, currentProjectId: -1 }

    case PROJECT_GET_FAIL:
      return { ...state, loading: false }

    case PROJECT_ADD_FAIL:
    case PROJECT_EDIT_FAIL:
    case PROJECT_DELETE_FAIL:
    case PROJECT_JOIN_FAIL:
    case PROJECT_LEAVE_FAIL:
    case PROJECT_HW_CHECK_IN_FAIL:
    case PROJECT_HW_CHECK_OUT_FAIL:
      return { ...state, submitting: false }

    case PROJECT_OPEN_DETAIL_MODAL:
      return { ...state, detailModalShow: true, currentProjectId: payload.projectId }

    case PROJECT_OPEN_ADD_MODAL:
      return { ...state, addProjectModalShow: true }

    case PROJECT_OPEN_EDIT_MODAL:
      return { ...state, detailModalShow: false, editProjectModalShow: true }

    case PROJECT_OPEN_DELETE_DIALOG:
      return { ...state, detailModalShow: false, deleteProjectDialogShow: true }

    case PROJECT_CLOSE_DETAIL_MODAL:
      return { ...state, detailModalShow: false }

    case PROJECT_CLOSE_ADD_MODAL:
      return { ...state, addProjectModalShow: false }

    case PROJECT_CLOSE_EDIT_MODAL:
      return { ...state, detailModalShow: true, editProjectModalShow: false }

    case PROJECT_CLOSE_DELETE_DIALOG:
      return { ...state, detailModalShow: true, deleteProjectDialogShow: false }

    default:
      return state
  }
}
