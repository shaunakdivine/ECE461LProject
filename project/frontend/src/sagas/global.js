import { call, put } from "redux-saga/effects";
import { sha256 } from 'js-sha256';
import { loginAPI } from "../apis/global";
import { GLOBAL_LOGIN_FAIL, GLOBAL_LOGIN_SUCCESS } from "../actions/types/global";

export function* globalLogin(action) {
  const { email, pwd } = action.payload;
  const body = {
    email,
    password: sha256(pwd)
  }

  try {
    const response = yield call(loginAPI, body);

    if (response.status === 'ok') {
      yield put({ type: GLOBAL_LOGIN_SUCCESS });
    } else {
      yield put({ type: GLOBAL_LOGIN_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: GLOBAL_LOGIN_FAIL, payload: { error: error.toString() } });
  }
}