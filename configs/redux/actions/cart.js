import { actionTypes } from "@/configs";

export const addCart = (data) => (dispatch) => {
  return dispatch({ type: actionTypes.ADD_CART, payload: data });
};