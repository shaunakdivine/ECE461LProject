import {
  HARDWARE_ADD,
  HARDWARE_ADD_FAIL,
  HARDWARE_ADD_SUCCESS,
  HARDWARE_DELETE,
  HARDWARE_DELETE_FAIL,
  HARDWARE_DELETE_SUCCESS,
  HARDWARE_EDIT,
  HARDWARE_EDIT_FAIL,
  HARDWARE_EDIT_SUCCESS,
  HARDWARE_GET,
  HARDWARE_GET_FAIL,
  HARDWARE_GET_SUCCESS,
  HARDWARE_CHECK_IN,
  HARDWARE_CHECK_IN_FAIL,
  HARDWARE_CHECK_IN_SUCCESS,
  HARDWARE_CHECK_OUT,
  HARDWARE_CHECK_OUT_FAIL,
  HARDWARE_CHECK_OUT_SUCCESS
} from "../actions/types/hardware"

const initialState = {
  loading: false,
  hwsets: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HARDWARE_GET:
    case HARDWARE_ADD:
    case HARDWARE_EDIT:
    case HARDWARE_DELETE:
    case HARDWARE_CHECK_IN:
    case HARDWARE_CHECK_OUT:
      return { ...state, loading: true }

    case HARDWARE_GET_SUCCESS:
      return { ...state, loading: false, hwsets: payload.hwsets }

    case HARDWARE_ADD_SUCCESS:
    case HARDWARE_EDIT_SUCCESS:
    case HARDWARE_DELETE_SUCCESS:
    case HARDWARE_CHECK_IN_SUCCESS:
    case HARDWARE_CHECK_OUT_SUCCESS:
      return { ...state, loading: false }

    case HARDWARE_GET_FAIL:
    case HARDWARE_ADD_FAIL:
    case HARDWARE_EDIT_FAIL:
    case HARDWARE_DELETE_FAIL:
    case HARDWARE_CHECK_IN_FAIL:
    case HARDWARE_CHECK_OUT_FAIL:
      return { ...state, loading: false }

    default:
      return state
  }
}
