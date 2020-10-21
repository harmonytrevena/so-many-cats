import { combineReducers } from "redux";
import activityReducer from "./reducers/activity"

export default combineReducers({ activity: activityReducer });