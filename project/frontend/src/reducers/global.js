import { GLOBAL_LOGIN, GLOBAL_LOGIN_FAIL, GLOBAL_LOGIN_SUCCESS } from "../actions/types/global"

const initialState = {
  loading: false,
  loggedIn: false,
}

export default (state = initialState, { type }) => {
  switch (type) {

  case GLOBAL_LOGIN:
    return { ...state, loading: true }

  case GLOBAL_LOGIN_SUCCESS:
    return { ...state, loading: false, loggedIn: true }

  case GLOBAL_LOGIN_FAIL:
    return { ...state, loading: false, loggedIn: false }

  default:
    return state
  }
}
