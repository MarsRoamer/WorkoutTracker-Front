export const addExercise = exercise => {
  return {
    type: "ADD_EXERCISE",
    exercise
  };
};

export const addBuiltWorkout = exercises => {
  return {
    type: "BUILT_WORKOUT",
    exercises
  };
};

export const registerUser = userId => {
  return {
    type: "START_SESSION",
    userId
  };
};

export const endSession = () => {
  return {
    type: "END_SESSION"
  };
};

export const addNewExercise = exercise => {
  return dispatch => {
    return fetch("/exercises", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({ exercise })
    })
      .then(response => response.json())
      .then(myJson => dispatch(addExercise(myJson)));
  };
};

export const buildWorkout = exercises => {
  return {
    type: "BUILD_WORKOUT",
    exercises
  };
};

export const clearWorkout = () => {
  return {
    type: "CLEAR_WORKOUT"
  };
};

export const savedLifts = lifts => {
  return {
    type: "SAVE_LIFTS",
    lifts
  };
};

export const getLiftHistory = (user, lift) => {
  let obj = { userId: user, liftId: lift };
  return dispatch => {
    return fetch("/user_exercises", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(myJson => dispatch(savedLifts(myJson)));
  };
};

export const saveWorkout = workout => {
  return dispatch => {
    return fetch("/user_exercises", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(workout)
    })
      .then(response => response.json())
      .then(myJson => dispatch(savedLifts(myJson)));
    // .then(myJson => console.log(myJson))
  };
};

export const createNewUser = userDetails => {
  return dispatch => {
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(userDetails)
    })
      .then(response => response.json())
      // .then(myJson => console.log(myJson))
      .then(myJson => dispatch(registerUser(myJson["id"])));
  };
};
