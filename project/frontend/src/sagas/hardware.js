import { all, call, put } from "redux-saga/effects";
import {
  // HARDWARE_ADD_FAIL,
  // HARDWARE_ADD_SUCCESS,
  // HARDWARE_DELETE_FAIL,
  // HARDWARE_DELETE_SUCCESS,
  // HARDWARE_EDIT_FAIL,
  // HARDWARE_EDIT_SUCCESS,
  // HARDWARE_GET_FAIL,
  // HARDWARE_GET_SUCCESS,
  HARDWARE_CHECK_IN_FAIL,
  HARDWARE_CHECK_IN_SUCCESS,
  HARDWARE_CHECK_OUT_FAIL,
  HARDWARE_CHECK_OUT_SUCCESS
} from "../actions/types/hardware";
import { PROJECT_GET } from "../actions/types/project";
import { checkInHardwareAPI, checkOutHardwareAPI } from "../apis/hardware";
// import { dummyTimeAPI } from "../apis/test";

// export function* hardwareGet(action) {
//   const body = action.payload;
//   console.log(body);

//   try {
//     yield call(dummyTimeAPI, 2000);
//     yield put({ type: HARDWARE_GET_SUCCESS, payload: { hwsets: [] } });
//   } catch (error) {
//     yield put({ type: HARDWARE_GET_FAIL, payload: { error: error.toString() } })
//   }
// }

// export function* hardwareAdd(action) {
//   const body = action.payload;
//   console.log(body);

//   try {
//     yield call(dummyTimeAPI, 2000);
//     yield put({ type: HARDWARE_ADD_SUCCESS });
//     // TODO: call HARDWARE_GET again to refresh hardware page
//   } catch (error) {
//     yield put({ type: HARDWARE_ADD_FAIL, payload: { error: error.toString() } })
//   }
// }

// export function* hardwareEdit(action) {
//   const body = action.payload;
//   console.log(body);

//   try {
//     yield call(dummyTimeAPI, 2000);
//     yield put({ type: HARDWARE_EDIT_SUCCESS });
//     // TODO: call HARDWARE_GET again to refresh hardware page
//   } catch (error) {
//     yield put({ type: HARDWARE_EDIT_FAIL, payload: { error: error.toString() } })
//   }
// }

// export function* hardwareDelete(action) {
//   const body = action.payload;
//   console.log(body);

//   try {
//     yield call(dummyTimeAPI, 2000);
//     yield put({ type: HARDWARE_DELETE_SUCCESS });
//     // TODO: call HARDWARE_GET again to refresh hardware page
//   } catch (error) {
//     yield put({ type: HARDWARE_DELETE_FAIL, payload: { error: error.toString() } })
//   }
// }

export function* hardwareCheckIn(action) {
  const body = action.payload;
  console.log(body);

  try {
    const response = call(checkInHardwareAPI, body);

    if (response.status) {
      yield all([
        put({ type: HARDWARE_CHECK_IN_SUCCESS }),
        put({ type: PROJECT_GET }),
      ]);
    } else {
      yield put({ type: HARDWARE_CHECK_IN_FAIL, payload: { error: response.error } })
    }
  } catch (error) {
    yield put({ type: HARDWARE_CHECK_IN_FAIL, payload: { error: error.toString() } });
  }
}

export function* hardwareCheckOut(action) {
  const body = action.payload;
  console.log(body);

  try {
    const response = call(checkOutHardwareAPI, body);

    if (response.status) {
      yield all([
        put({ type: HARDWARE_CHECK_OUT_SUCCESS }),
        put({ type: PROJECT_GET }),
      ]);
    } else {
      yield put({ type: HARDWARE_CHECK_OUT_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: HARDWARE_CHECK_OUT_FAIL, payload: { error: error.toString() } });
  }
}