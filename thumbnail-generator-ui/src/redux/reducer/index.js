import logged from "./logged";
import userLoggedData from "./userLoggedData";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  login: logged,
  userData: userLoggedData,
});

export default allReducer;
