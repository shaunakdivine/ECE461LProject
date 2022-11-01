import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { globalReducer, hardwareReducer, projectReducer } from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    global: globalReducer,
    project: projectReducer,
    hardware: hardwareReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(rootSaga);