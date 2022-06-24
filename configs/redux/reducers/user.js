const initialValue = {
  userName: "",
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
