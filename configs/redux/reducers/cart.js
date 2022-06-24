let initialValue = [];

const cartReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "ADD_CART":
      return [...state, ...payload];

    default:
      return state;
  }
};

export default cartReducer;
