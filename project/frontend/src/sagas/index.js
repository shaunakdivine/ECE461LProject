import { all, takeEvery } from 'redux-saga/effects';
import {
  GLOBAL_CHECK_LOGIN,
  GLOBAL_LOGIN,
  GLOBAL_LOGOUT,
  GLOBAL_REGISTER
} from '../actions/types/global';
import {
  globalCheckLogin,
  globalLogin,
  globalLogout,
  globalRegister
} from './global';

export default function* rootSaga() {
  yield all([
    // global
    takeEvery(GLOBAL_CHECK_LOGIN, globalCheckLogin),
    takeEvery(GLOBAL_LOGIN, globalLogin),
    takeEvery(GLOBAL_LOGOUT, globalLogout),
    takeEvery(GLOBAL_REGISTER, globalRegister),
  ]);
}