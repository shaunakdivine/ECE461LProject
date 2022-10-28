import { call, put } from "redux-saga/effects";
import { sha256 } from 'js-sha256';
import { loginAPI } from "../apis/global";
import { GLOBAL_LOGIN_FAIL, GLOBAL_LOGIN_SUCCESS } from "../actions/types/global";
import { dummyTimeAPI } from "../apis/test";

export function* globalCheckLogin() {
  console.log('check login');
  if (localStorage.getItem('__token') !== null) {
    yield put({ type: GLOBAL_LOGIN_SUCCESS });
  }
}

export function* globalLogin(action) {
  const { email, pwd } = action.payload;
  const body = {
    email,
    password: sha256(pwd)
  }

  try {
    // test 
    yield call(dummyTimeAPI, 2000);
    const response = yield call(loginAPI, body);

    if (response.status === 'ok') {
      localStorage.setItem('__token', response.data);
      yield put({ type: GLOBAL_LOGIN_SUCCESS });
    } else {
      yield put({ type: GLOBAL_LOGIN_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: GLOBAL_LOGIN_FAIL, payload: { error: error.toString() } });
  }
}