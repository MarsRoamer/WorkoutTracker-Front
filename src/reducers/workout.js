export const workout = (state = [], action) => {
  switch (action.type) {
    case "BUILD_WORKOUT":
      return action.exercises;
    case "CLEAR_WORKOUT":
      return [...state, action.exercises];
    case "BUILT_WORKOUT":
      return action.exercises;
    default:
      return state;
  }
};
