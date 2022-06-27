import { actionTypes } from "@/configs";

let initialValue = [];

const cartReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_COUNT:
      let data = payload;
      let index = null;

      state.forEach((item, order) => {
        if (item.id === payload.id) {
          data = {
            ...data,
            count: (item.count || 0) + payload.count,
          };

          index = order;
        }
      });

      let initState = [...state];

      if (index !== null) {
        if (data.count > 0) {
          initState[index] = data;
        } else [initState.splice(index, 1)];
      } else {
        initState = [...initState, data];
      }

      return initState;

    case "DELETE_CART":
      return [];

    default:
      return state;
  }
};

export default cartReducer;
