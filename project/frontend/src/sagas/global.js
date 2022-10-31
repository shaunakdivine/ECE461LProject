import { call, put } from "redux-saga/effects";
import { sha256 } from 'js-sha256';
import { loginAPI, registerAPI } from "../apis/global";
import { 
  GLOBAL_LOGIN,
  GLOBAL_LOGIN_FAIL,
  GLOBAL_LOGIN_SUCCESS,
  GLOBAL_LOGOUT_FAIL,
  GLOBAL_LOGOUT_SUCCESS,
  GLOBAL_REGISTER_FAIL,
} from "../actions/types/global";

export function* globalCheckLogin() {
  console.log('check login');
  if (localStorage.getItem('__token') !== null) {
    const payload = {
      ...JSON.parse(localStorage.getItem('__user_meta')),
      token: localStorage.getItem('__token'),
    }
    yield put({ type: GLOBAL_LOGIN_SUCCESS, payload });
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
      localStorage.setItem('__user_meta', JSON.stringify({
        fname: response.data.fname,
        lname: response.data.lname,
        email: response.data.email,
      }));
      yield put({ type: GLOBAL_LOGIN_SUCCESS, payload: {
        fname: response.data.fname,
        lname: response.data.lname,
        email: response.data.email,
        token: response.data.token,
      }});
    } else {
      yield put({ type: GLOBAL_LOGIN_FAIL, payload: { error: response.error } });
    }
  } catch (error) {
    yield put({ type: GLOBAL_LOGIN_FAIL, payload: { error: error.toString() } });
  }
}

export function* globalLogout() {
  try {
    localStorage.removeItem('__token');
    localStorage.removeItem('__user_meta');
    yield put({ type: GLOBAL_LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: GLOBAL_LOGOUT_FAIL, payload: { error: error.toString() } });
  }
}

export function* globalRegister(action) {
  const body = action.payload;

  try {
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