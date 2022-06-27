import { combineReducers } from "redux";
import userReducers from "./user";
import menuReducers from "./menu";
import cartReducer from "./cart";
import voucherReducers from "./voucher";
import diskonReducers from "./diskon";
import queueReducers from "./queue";
import paymentReducers from "./payment";

const reducers = {
  user: userReducers,
  menu: menuReducers,
  cart: cartReducer,
  voucher: voucherReducers,
  diskon: diskonReducers,
  queue: queueReducers,
  payment: paymentReducers,
};

export default combineReducers(reducers);
