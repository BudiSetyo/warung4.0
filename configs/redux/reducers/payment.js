const initialValue = {
  method: "",
};

const paymentReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_METHOD":
      return {
        ...state,
        method: action.payload,
      };

    default:
      return state;
  }
};

export default paymentReducers;
