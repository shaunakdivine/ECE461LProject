import { call, put } from "redux-saga/effects";
import {
  PROJECT_ADD_FAIL,
  PROJECT_ADD_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_SUCCESS,
  PROJECT_EDIT_FAIL,
  PROJECT_EDIT_SUCCESS,
  PROJECT_GET_FAIL,
  PROJECT_GET_SUCCESS,
  PROJECT_JOIN_FAIL,
  PROJECT_JOIN_SUCCESS,
  PROJECT_LEAVE_FAIL,
  PROJECT_LEAVE_SUCCESS
} from "../actions/types/project";
import { dummyTimeAPI } from "../apis/test";

export function* projectGet(action) {
  const body = action.payload;
  console.log(body);

  try {
    yield call(dummyTimeAPI, 2000);
    yield put({ type: PROJECT_GET_SUCCESS, payload: { projects: [] } });
  } catch (error) {
    yield put({ type: PROJECT_GET_FAIL, payload: { error: error.toString() } })
  }
}

export function* projectAdd(action) {
  const body = action.payload;
  console.log(body);

  try {
    yield call(dummyTimeAPI, 2000);
    yield put({ type: PROJECT_ADD_SUCCESS });
    // TODO: call PROJECT_GET again to refresh project page
  } catch (error) {
    yield put({ type: PROJECT_ADD_FAIL, payload: { error: error.toString() } })
  }
}

export function* projectEdit(action) {
  const body = action.payload;
  console.log(body);

  try {
    yield call(dummyTimeAPI, 2000);
    yield put({ type: PROJECT_EDIT_SUCCESS });
    // TODO: call PROJECT_GET again to refresh project page
  } catch (error) {
    yield put({ type: PROJECT_EDIT_FAIL, payload: { error: error.toString() } })
  }
}

export function* projectDelete(action) {
  const body = action.payload;
  console.log(body);

  try {
    yield call(dummyTimeAPI, 2000);
    yield put({ type: PROJECT_DELETE_SUCCESS });
    // TODO: call PROJECT_GET again to refresh project page
  } catch (error) {
    yield put({ type: PROJECT_DELETE_FAIL, payload: { error: error.toString() } })
  }
}

export function* projectJoin(action) {
  const body = action.payload;
  console.log(body);

  try {
    yield call(dummyTimeAPI, 2000);
    yield put({ type: PROJECT_JOIN_SUCCESS });
    // TODO: call PROJECT_GET again to refresh project page
  } catch (error) {
    yield put({ type: PROJECT_JOIN_FAIL, payload: { error: error.toString() } })
  }
}

export function* projectLeave(action) {
  const body = action.payload;
  console.log(body);

  try {
    yield call(dummyTimeAPI, 2000);
    yield put({ type: PROJECT_LEAVE_SUCCESS });
    // TODO: call PROJECT_GET again to refresh project page
  } catch (error) {
    yield put({ type: PROJECT_LEAVE_FAIL, payload: { error: error.toString() } })
  }
}