export const liftHistory = (state = [], action) => {
  switch (action.type) {
    case "SAVE_LIFTS":
      return state.concat(action.lifts);
    // return [...state, action.lifts];
    case "GET_PREVIOUS_LIFTS":
      return [...state, action.lifts];
    default:
      return state;
  }
};
