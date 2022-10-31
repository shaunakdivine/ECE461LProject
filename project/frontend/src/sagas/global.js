import { call, put } from "redux-saga/effects";
import { sha256 } from 'js-sha256';
import { loginAPI, logoutAPI, registerAPI } from "../apis/global";
import { 
  GLOBAL_LOGIN,
  GLOBAL_LOGIN_FAIL,
  GLOBAL_LOGIN_SUCCESS,
  GLOBAL_LOGOUT_FAIL,
  GLOBAL_LOGOUT_SUCCESS,
  GLOBAL_REGISTER_FAIL,
} from "../actions/types/global";
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
    const response = yield call(loginAPI, body);

    if (response.status) {
      localStorage.setItem('__token', response.data.token);
      yield put({ type: GLOBAL_LOGIN_SUCCESS });
    } else {
      yield put({ type: GLOBAL_LOGIN_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: GLOBAL_LOGIN_FAIL, payload: { error: error.toString() } });
  }
}

export function* globalLogout(action) {
  const { email } = action.payload;

  try {
    const response = yield call(logoutAPI, { email });

    if (response.status === 'ok') {
      localStorage.removeItem('__token');
      yield put({ type: GLOBAL_LOGOUT_SUCCESS });
    } else {
      yield put({ type: GLOBAL_LOGOUT_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: GLOBAL_LOGOUT_FAIL, payload: { error: error.toString() } });
  }
}

export function* globalRegister(action) {
  const body = action.payload;

  try {
    // test 
    yield call(dummyTimeAPI, 2000);
    const response = yield call(registerAPI, { ...body, password: sha256(body.password) });

    if (response.status) {
      yield put({ type: GLOBAL_LOGIN, payload: { email: body.email, pwd: body.password } });
    } else {
      yield put({ type: GLOBAL_REGISTER_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: GLOBAL_REGISTER_FAIL, payload: { error: error.toString() } });
  }
}