import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas/root.saga'
  
const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare, logger]

/**
 * The store object represents the entire redux application and contains references to all the reducers and all data produced by the reducers
 */
const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware))
);

sagaMiddleWare.run(rootSaga)

export default store;