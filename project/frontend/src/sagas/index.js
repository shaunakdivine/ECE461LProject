import { all, takeEvery } from 'redux-saga/effects';
import { GLOBAL_CHECK_LOGIN, GLOBAL_LOGIN } from '../actions/types/global';
import { globalCheckLogin, globalLogin } from './global';

export default function* rootSaga() {
  yield all([
    // global
    takeEvery(GLOBAL_CHECK_LOGIN, globalCheckLogin),
    takeEvery(GLOBAL_LOGIN, globalLogin),
  ]);
}