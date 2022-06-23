import { combineReducers } from "redux";
import userReducers from "./user";
import menuReducers from "./menu";

const reducers = {
  user: userReducers,
  menu: menuReducers,
};

export default combineReducers(reducers);
