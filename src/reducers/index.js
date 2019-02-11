import { combineReducers } from "redux";
import board from "./Board";
import leftnavigation from "./LeftNavigation";

export default combineReducers({
  board,
  leftnavigation
});
