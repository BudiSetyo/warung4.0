const initialValue = {
  diskon: {
    diskon: 0,
    minimum: 0,
    code: "",
  },
};
const diskonReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_DISKON":
      return {
        ...state,
        diskon: action.payload,
      };

    case "CANCEL_DISKON":
      return {
        ...state,
        diskon: {
          diskon: 0,
          minimum: 0,
          code: "",
        },
      };

    default:
      return state;
  }
};

export default diskonReducers;
