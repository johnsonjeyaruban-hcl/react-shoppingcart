import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { createLogger } from 'redux-logger'

import reduxSaga from "redux-saga"
import rootSaga from './sagas'

import thunk from 'redux-thunk';

const logger = createLogger({
  // ...options
});


export const getStore = () => {
    // const initialState = {};
    // const reduxSagaMiddleware = reduxSaga();
    //const store = createStore(rootReducer, initialState, applyMiddleware(reduxSagaMiddleware));
    const store = createStore(rootReducer, applyMiddleware(logger, thunk));
    //reduxSagaMiddleware.run(rootSaga)
    return store;
  }