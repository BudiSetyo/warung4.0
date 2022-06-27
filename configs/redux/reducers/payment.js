const initialValue = {
  method: "",
};

const paymentReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_PAYMENT":
      return {
        ...state,
        method: action.payload,
      };

    default:
      return state;
  }
};

export default paymentReducers;
