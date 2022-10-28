import { GLOBAL_CLOSE_TOAST, GLOBAL_LOGIN, GLOBAL_LOGIN_FAIL, GLOBAL_LOGIN_SUCCESS } from "../actions/types/global"

const initialState = {
  loading: false,
  loggedIn: false,
  errorToastShow: false,
  error: "",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GLOBAL_LOGIN:
    return { ...state, loading: true }

  case GLOBAL_LOGIN_SUCCESS:
    return { ...state, loading: false, loggedIn: true }

  case GLOBAL_LOGIN_FAIL:
      return { ...state, loading: false, errorToastShow: true, error: payload.error }

  case GLOBAL_CLOSE_TOAST:
    return { ...state, errorToastShow: false }

  default:
    return state
  }
}
