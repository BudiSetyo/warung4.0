const initialValue = [];

const menuReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default menuReducers;
