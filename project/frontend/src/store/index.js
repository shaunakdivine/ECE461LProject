import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
<<<<<<< HEAD
import { globalReducer, hardwareReducer, projectReducer } from '../reducers';
=======
import { globalReducer, projectReducer } from '../reducers';
>>>>>>> 408b82a (add project redux reducers)
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    global: globalReducer,
    project: projectReducer,
<<<<<<< HEAD
    hardware: hardwareReducer
=======
>>>>>>> 408b82a (add project redux reducers)
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(rootSaga);