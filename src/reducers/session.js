export const session = (state = defaultState, action) => {
  switch (action.type) {
    case "START_SESSION":
      return { ...state, loggedIn: "True", userId: action.userId };
    case "END_SESSION":
      return { ...state, loggedIn: "False", userId: "" };
    default:
      return state;
  }
};

const defaultState = { loggedIn: "False", userId: "" };
