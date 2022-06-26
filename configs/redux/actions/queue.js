import { actionTypes } from "@/configs";

export const addQueue = () => (dispatch) => {
  return dispatch({ type: actionTypes.ADD_QUEUE });
};
