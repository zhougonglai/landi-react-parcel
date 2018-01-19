import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares;

if(process.env.NODE_ENV !== 'production'){
  middlewares = applyMiddleware(thunk, logger);
}else{
  middlewares = applyMiddleware(thunk);
}

const store = createStore(
  reducer, composeEnhancers(middlewares)
);

export default store;