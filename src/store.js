import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import map from './reducers/mapReducer';
import summaryWorkout from './reducers/workoutSummaryReducer'
import resultsWorkout from './reducers/workoutsResultsReducer'
import filterData from './reducers/filterDataReducer'


export default createStore(
  combineReducers({
    map,
    summaryWorkout,
    resultsWorkout,
    filterData
  }),
  {},
  applyMiddleware(thunk, logger)
);
