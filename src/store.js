import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import map from './reducers/mapReducer';
import summaryWorkout from './reducers/workoutSummaryReducer'
import resultsWorkout from './reducers/workoutsResultsReducer'


export default createStore(
  combineReducers({
    map,
    summaryWorkout,
    resultsWorkout
  }),
  {},
  applyMiddleware(thunk, logger)
);
