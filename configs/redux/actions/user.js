import { actionTypes } from "@/configs";

export const userLogin = (data) => (dispatch) => {
  return dispatch({ type: actionTypes.USER_LOGIN, payload: data });
};
