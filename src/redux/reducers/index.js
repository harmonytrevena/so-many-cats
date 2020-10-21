import { combineReducers } from "redux";
import catReducer from "./catReducer";

export default combineReducers({ cats: catReducer });