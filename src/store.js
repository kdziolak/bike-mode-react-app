import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import map from './reducers/mapReducer';

export default createStore(
  combineReducers({
    map
  }),
  {},
  applyMiddleware(thunk, logger)
);
