export const displayWorkout = (state = [], action) => {
  switch (action.type) {
    case "FOR_REVIEW":
      return [...state, action.lift];
    default:
      return state;
  }
};
