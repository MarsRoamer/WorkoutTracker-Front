import { combineReducers } from "redux";
import { exercises } from "./exercises";
import { session } from "./session";
import { workout } from "./workout";
import { liftHistory } from "./previousLifts";
import { displayWorkout } from "./displayWorkout";

export const rootReducer = combineReducers({
  exercises,
  session,
  workout,
  liftHistory,
  displayWorkout
});
