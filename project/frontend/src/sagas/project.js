import { all, call, put } from "redux-saga/effects";
import {
  PROJECT_ADD_FAIL,
  PROJECT_ADD_SUCCESS,
  PROJECT_CLOSE_ADD_MODAL,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_SUCCESS,
  PROJECT_EDIT_FAIL,
  PROJECT_EDIT_SUCCESS,
  PROJECT_GET,
  PROJECT_GET_FAIL,
  PROJECT_GET_SUCCESS,
  PROJECT_JOIN_FAIL,
  PROJECT_JOIN_SUCCESS,
  PROJECT_LEAVE_FAIL,
  PROJECT_LEAVE_SUCCESS
} from "../actions/types/project";
import { addProjectAPI, deleteProjectAPI, editProjectAPI, getProjectsAPI, joinProjectAPI, leaveProjectAPI } from "../apis/project";

export function* projectGet(action) {
  const { userId } = action.payload;

  try {
    const response = yield call(getProjectsAPI, userId);

    if (response.status) {
      yield put({ type: PROJECT_GET_SUCCESS, payload: { projects: response.data } });
    } else {
      yield put({ type: PROJECT_GET_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: PROJECT_GET_FAIL, payload: { error: error.toString() } });
  }
}

export function* projectAdd(action) {
  const { userId, data } = action.payload;
  console.log(data);

  try {
    const response = yield call(addProjectAPI, data);

    if (response.status) {
      yield all([
        put({ type: PROJECT_ADD_SUCCESS }),
        put({ type: PROJECT_CLOSE_ADD_MODAL }),
        put({ type: PROJECT_GET, payload: { userId } }),
      ]);
    } else {
      yield put({ type: PROJECT_ADD_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: PROJECT_ADD_FAIL, payload: { error: error.toString() } });
  }
}

export function* projectEdit(action) {
  const { projectId, data } = action.payload;
  console.log(projectId, data);

  try {
    const response = yield call(editProjectAPI, projectId, data);

    if (response.status) {
      yield all([
        put({ type: PROJECT_EDIT_SUCCESS }),
        put({ type: PROJECT_GET }),
      ]);
    } else {
      yield put({ type: PROJECT_EDIT_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: PROJECT_EDIT_FAIL, payload: { error: error.toString() } });
  }
}

export function* projectDelete(action) {
  const { projectId } = action.payload;
  console.log(projectId);

  try {
    const response = yield call(deleteProjectAPI, projectId);

    if (response.status) {
      yield all([
        put({ type: PROJECT_DELETE_SUCCESS }),
        put({ type: PROJECT_GET }),
      ]);
    } else {
      yield put({ type: PROJECT_DELETE_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: PROJECT_DELETE_FAIL, payload: { error: error.toString() } });
  }
}

export function* projectJoin(action) {
  const body = action.payload;
  console.log(body);

  try {
    const response = yield call(joinProjectAPI, body);

    if (response.status) {
      yield all([
        put({ type: PROJECT_JOIN_SUCCESS }),
        put({ type: PROJECT_GET }),
      ])
    } else {
      yield put({ type: PROJECT_JOIN_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: PROJECT_JOIN_FAIL, payload: { error: error.toString() } });
  }
}

export function* projectLeave(action) {
  const body = action.payload;
  console.log(body);

  try {
    const response = yield call(leaveProjectAPI, body);

    if (response.status) {
      yield all([
        put({ type: PROJECT_LEAVE_SUCCESS }),
        put({ type: PROJECT_GET }),
      ])
    } else {
      yield put({ type: PROJECT_LEAVE_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: PROJECT_LEAVE_FAIL, payload: { error: error.toString() } })
  }
}