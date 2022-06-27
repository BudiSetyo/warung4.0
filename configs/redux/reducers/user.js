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

    case "USER_LOGOUT":
      return {
        ...state,
        userName: "",
      };

    default:
      return state;
  }
};

export default userReducer;
