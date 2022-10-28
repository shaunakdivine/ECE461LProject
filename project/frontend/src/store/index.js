import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { globalReducer } from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    global: globalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(rootSaga);