import {
  GLOBAL_CLOSE_TOAST,
  GLOBAL_LOGIN,
  GLOBAL_LOGIN_FAIL,
  GLOBAL_LOGIN_SUCCESS,
  GLOBAL_LOGOUT,
  GLOBAL_LOGOUT_FAIL,
  GLOBAL_LOGOUT_SUCCESS,
  GLOBAL_REGISTER,
  GLOBAL_REGISTER_FAIL,
} from "../actions/types/global";
import {
  PROJECT_ADD_FAIL,
  PROJECT_DELETE_FAIL,
  PROJECT_EDIT_FAIL,
  PROJECT_GET_FAIL,
  PROJECT_HW_CHECK_IN_FAIL,
  PROJECT_HW_CHECK_OUT_FAIL,
  PROJECT_JOIN_FAIL,
  PROJECT_LEAVE_FAIL
} from "../actions/types/project";

const initialState = {
  loading: false,
  loggedIn: false,
  name: '',
  email: '',
  token: '',
  errorToastShow: false,
  error: "",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GLOBAL_LOGIN:
  case GLOBAL_LOGOUT:
  case GLOBAL_REGISTER:
    return { ...state, loading: true }

  case GLOBAL_LOGIN_SUCCESS:
    console.log(payload);
    return {
      ...state,
      loading: false,
      loggedIn: true,
      name: `${payload.fname} ${payload.lname}`,
      email: payload.email,
      token: payload.token,
    }

  case GLOBAL_LOGOUT_SUCCESS:
    return { ...state, loading: false, loggedIn: false }

  case GLOBAL_LOGIN_FAIL:
  case GLOBAL_LOGOUT_FAIL:
  case GLOBAL_REGISTER_FAIL:
    return { ...state, loading: false, errorToastShow: true, error: payload.error }

  case GLOBAL_CLOSE_TOAST:
    return { ...state, errorToastShow: false }

  case PROJECT_GET_FAIL:
  case PROJECT_ADD_FAIL:
  case PROJECT_EDIT_FAIL:
  case PROJECT_DELETE_FAIL:
  case PROJECT_JOIN_FAIL:
  case PROJECT_LEAVE_FAIL:
  case PROJECT_HW_CHECK_IN_FAIL:
  case PROJECT_HW_CHECK_OUT_FAIL:
    return { ...state, errorToastShow: true, error: payload.error }

  default:
    return state
  }
}
