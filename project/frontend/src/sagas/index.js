import { all, takeEvery } from 'redux-saga/effects';
import { GLOBAL_LOGIN } from '../actions/types/global';
import { globalLogin } from './global';

export default function* rootSaga() {
  yield all([
    // global
    takeEvery(GLOBAL_LOGIN, globalLogin),
  ]);
}