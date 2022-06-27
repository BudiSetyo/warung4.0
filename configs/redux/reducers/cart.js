let initialValue = [];

const cartReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "ADD_CART":
      return [...state, ...payload];

    case "DELETE_CART":
      return [];

    default:
      return state;
  }
};

export default cartReducer;
