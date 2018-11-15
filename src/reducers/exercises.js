export const exercises = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXERCISE":
      return state.concat(action.exercise);
    // return [...state, exercises: action.exercise];

    default:
      return state;
  }
};
