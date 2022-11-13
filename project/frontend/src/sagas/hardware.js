import { all, call, put } from "redux-saga/effects";
import {
  PROJECT_CLOSE_DETAIL_MODAL,
  PROJECT_GET,
  PROJECT_HW_CHECK_IN_FAIL,
  PROJECT_HW_CHECK_IN_SUCCESS,
  PROJECT_HW_CHECK_OUT_FAIL,
  PROJECT_HW_CHECK_OUT_SUCCESS
} from "../actions/types/project";
import { checkInHardwareAPI, checkOutHardwareAPI } from "../apis/hardware";
// import { dummyTimeAPI } from "../apis/test";

export function* hardwareCheckIn(action) {
  const { userId, projectId, data } = action.payload;

  console.log('1111');

  try {
    const response = yield call(checkInHardwareAPI, userId, projectId, data);

    if (response.status) {
      yield all([
        put({ type: PROJECT_HW_CHECK_IN_SUCCESS }),
        put({ type: PROJECT_CLOSE_DETAIL_MODAL }),
        put({ type: PROJECT_GET, payload: { userId } }),
      ]);
    } else {
      yield put({ type: PROJECT_HW_CHECK_IN_FAIL, payload: { error: response.error } })
    }
  } catch (error) {
    yield put({ type: PROJECT_HW_CHECK_IN_FAIL, payload: { error: error.toString() } });
  }
}

export function* hardwareCheckOut(action) {
  const { userId, projectId, data } = action.payload;

  try {
    const response = yield call(checkOutHardwareAPI, userId, projectId, data);

    if (response.status) {
      yield all([
        put({ type: PROJECT_HW_CHECK_OUT_SUCCESS }),
        put({ type: PROJECT_CLOSE_DETAIL_MODAL }),
        put({ type: PROJECT_GET, payload: { userId } }),
      ]);
    } else {
      yield put({ type: PROJECT_HW_CHECK_OUT_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: PROJECT_HW_CHECK_OUT_FAIL, payload: { error: error.toString() } });
  }
}