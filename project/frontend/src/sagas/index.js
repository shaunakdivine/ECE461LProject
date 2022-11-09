import { all, takeEvery } from 'redux-saga/effects';
import {
  GLOBAL_CHECK_LOGIN,
  GLOBAL_LOGIN,
  GLOBAL_LOGOUT,
  GLOBAL_REGISTER
} from '../actions/types/global';
import {
  // HARDWARE_ADD,
  HARDWARE_CHECK_IN,
  HARDWARE_CHECK_OUT,
  // HARDWARE_DELETE,
  // HARDWARE_EDIT,
  // HARDWARE_GET
} from '../actions/types/hardware';
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
  // hardwareAdd,
  hardwareCheckIn,
  hardwareCheckOut,
  // hardwareDelete,
  // hardwareEdit,
  // hardwareGet
} from './hardware';
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

    // hardware
    // takeEvery(HARDWARE_GET, hardwareGet),
    // takeEvery(HARDWARE_ADD, hardwareAdd),
    // takeEvery(HARDWARE_EDIT, hardwareEdit),
    // takeEvery(HARDWARE_DELETE, hardwareDelete),
    takeEvery(HARDWARE_CHECK_IN, hardwareCheckIn),
    takeEvery(HARDWARE_CHECK_OUT, hardwareCheckOut),
  ]);
}