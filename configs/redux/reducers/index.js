import { combineReducers } from "redux";
import userReducers from "./user";
import menuReducers from "./menu";
import cartReducer from "./cart";

const reducers = {
  user: userReducers,
  menu: menuReducers,
  cart: cartReducer,
};

export default combineReducers(reducers);
