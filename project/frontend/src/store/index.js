import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { globalReducer, projectReducer } from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    global: globalReducer,
    project: projectReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(rootSaga);