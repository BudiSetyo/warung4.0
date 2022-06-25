import { actionTypes } from "@/configs";

export const addDiskon = (data) => (dispatch) => {
  return dispatch({ type: actionTypes.ADD_DISKON, payload: data });
};
