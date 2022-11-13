import { all, takeEvery } from 'redux-saga/effects';
import {
  GLOBAL_CHECK_LOGIN,
  GLOBAL_LOGIN,
  GLOBAL_LOGOUT,
  GLOBAL_REGISTER
} from '../actions/types/global';
import {
  PROJECT_ADD,
  PROJECT_ADD_AUTH_USER,
  PROJECT_DELETE,
  PROJECT_EDIT,
  PROJECT_GET,
  PROJECT_HW_CHECK_IN,
  PROJECT_HW_CHECK_OUT,
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
  hardwareCheckIn,
  hardwareCheckOut,
} from './hardware';
import {
  projectAdd,
  projectAddAuthUser,
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
    takeEvery(PROJECT_ADD_AUTH_USER, projectAddAuthUser),

    // hardware
    takeEvery(PROJECT_HW_CHECK_IN, hardwareCheckIn),
    takeEvery(PROJECT_HW_CHECK_OUT, hardwareCheckOut),
  ]);
}