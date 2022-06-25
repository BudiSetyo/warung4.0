const initialValue = {
  diskon: {},
};
const diskonReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_DISKON":
      return {
        ...state,
        diskon: action.payload,
      };

    default:
      return state;
  }
};

export default diskonReducers;
