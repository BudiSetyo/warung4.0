const initialValue = 0;

const queueReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_QUEUE":
      return state + 1;

    default:
      return state;
  }
};

export default queueReducers;
