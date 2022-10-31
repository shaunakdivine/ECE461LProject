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

const initialState = {
  loading: false,
  loggedIn: false,
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
    return { ...state, loading: false, loggedIn: true }

  case GLOBAL_LOGOUT_SUCCESS:
    return { ...state, loading: false, loggedIn: false }

  case GLOBAL_LOGIN_FAIL:
  case GLOBAL_LOGOUT_FAIL:
  case GLOBAL_REGISTER_FAIL:
      return { ...state, loading: false, errorToastShow: true, error: payload.error }

  case GLOBAL_CLOSE_TOAST:
    return { ...state, errorToastShow: false }

  default:
    return state
  }
}
