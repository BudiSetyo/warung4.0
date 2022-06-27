import { actionTypes } from "@/configs";

export const addDiskon = (data) => (dispatch) => {
  return dispatch({ type: actionTypes.ADD_DISKON, payload: data });
};

export const cancelDiskon = () => (dispatch) => {
  return dispatch({ type: actionTypes.CANCEL_DISKON });
};
