import { all, takeEvery } from 'redux-saga/effects';
import {
  GLOBAL_CHECK_LOGIN,
  GLOBAL_LOGIN,
  GLOBAL_LOGOUT,
  GLOBAL_REGISTER
} from '../actions/types/global';
import {
  PROJECT_ADD,
  PROJECT_DELETE,
  PROJECT_EDIT,
  PROJECT_GET,
  PROJECT_JOIN,
  PROJECT_LEAVE
} from '../actions/types/project';
import {
  globalCheckLogin,
  globalLogin,
  globalLogout,
  globalRegister
} from './global';
import {
  projectAdd,
  projectDelete,
  projectEdit,
  projectGet,
  projectJoin,
  projectLeave
} from './project';

export default function* rootSaga() {
  yield all([
    // global
    takeEvery(GLOBAL_CHECK_LOGIN, globalCheckLogin),
    takeEvery(GLOBAL_LOGIN, globalLogin),
    takeEvery(GLOBAL_LOGOUT, globalLogout),
    takeEvery(GLOBAL_REGISTER, globalRegister),

    // project
    takeEvery(PROJECT_GET, projectGet),
    takeEvery(PROJECT_ADD, projectAdd),
    takeEvery(PROJECT_EDIT, projectEdit),
    takeEvery(PROJECT_DELETE, projectDelete),
    takeEvery(PROJECT_JOIN, projectJoin),
    takeEvery(PROJECT_LEAVE, projectLeave),
  ]);
}