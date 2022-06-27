import { actionTypes } from "@/configs";

export const addPayment = (data) => (dispatch) => {
  return dispatch({ type: actionTypes.ADD_PAYMENT, payload: data });
};
