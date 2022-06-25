import { combineReducers } from "redux";
import userReducers from "./user";
import menuReducers from "./menu";
import cartReducer from "./cart";
import voucherReducers from "./voucher";
import diskonReducers from "./diskon";

const reducers = {
  user: userReducers,
  menu: menuReducers,
  cart: cartReducer,
  voucher: voucherReducers,
  diskon: diskonReducers,
};

export default combineReducers(reducers);
