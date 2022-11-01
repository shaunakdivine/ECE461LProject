import {
  PROJECT_ADD,
  PROJECT_ADD_FAIL,
  PROJECT_ADD_SUCCESS,
<<<<<<< HEAD
  PROJECT_CLOSE_DETAIL_MODAL,
=======
>>>>>>> 408b82a (add project redux reducers)
  PROJECT_DELETE,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_SUCCESS,
  PROJECT_EDIT,
  PROJECT_EDIT_FAIL,
  PROJECT_EDIT_SUCCESS,
  PROJECT_GET,
  PROJECT_GET_FAIL,
  PROJECT_GET_SUCCESS,
  PROJECT_JOIN,
  PROJECT_JOIN_FAIL,
  PROJECT_JOIN_SUCCESS,
  PROJECT_LEAVE,
  PROJECT_LEAVE_FAIL,
<<<<<<< HEAD
  PROJECT_LEAVE_SUCCESS,
  PROJECT_OPEN_DETAIL_MODAL
} from "../actions/types/project"
import { MOCK_PROJECTS } from "./mock/project"

const initialState = {
  loading: false,  // whole page reloading
  submitting: false,  // operation submitting
  detailModalShow: false,
  projects: MOCK_PROJECTS,
  currentProjectId: -1,
=======
  PROJECT_LEAVE_SUCCESS
} from "../actions/types/project"

const initialState = {
  loading: false,
  projects: [],
>>>>>>> 408b82a (add project redux reducers)
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROJECT_GET:
    case PROJECT_ADD:
    case PROJECT_EDIT:
    case PROJECT_DELETE:
    case PROJECT_JOIN:
    case PROJECT_LEAVE:
      return { ...state, loading: true }

    case PROJECT_GET_SUCCESS:
      return { ...state, loading: false, projects: payload.projects }

    case PROJECT_ADD_SUCCESS:
    case PROJECT_EDIT_SUCCESS:
    case PROJECT_DELETE_SUCCESS:
    case PROJECT_JOIN_SUCCESS:
    case PROJECT_LEAVE_SUCCESS:
      return { ...state, loading: false }

    case PROJECT_GET_FAIL:
    case PROJECT_ADD_FAIL:
    case PROJECT_EDIT_FAIL:
    case PROJECT_DELETE_FAIL:
    case PROJECT_JOIN_FAIL:
    case PROJECT_LEAVE_FAIL:
      return { ...state, loading: false }
<<<<<<< HEAD

    case PROJECT_OPEN_DETAIL_MODAL:
      return { ...state, detailModalShow: true, currentProjectId: payload.projectId }

    case PROJECT_CLOSE_DETAIL_MODAL:
      return { ...state, detailModalShow: false }

    default:
      return state
=======
>>>>>>> 408b82a (add project redux reducers)
  }
}
