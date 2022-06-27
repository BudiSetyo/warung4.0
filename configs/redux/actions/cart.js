import { actionTypes } from "@/configs";

export const changeCounnt = (data) => (dispatch) => {
  return dispatch({ type: actionTypes.CHANGE_COUNT, payload: data });
};

export const deleteCart = () => (dispatch) => {
  return dispatch({ type: actionTypes.DELETE_CART });
};
