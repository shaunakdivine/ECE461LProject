import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(saga));

saga.run(rootSaga);