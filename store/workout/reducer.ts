// src/redux/workout/reducer.ts

import {
  WorkoutAction,
  WorkoutState,
  ADD_WORKOUT,
  DELETE_WORKOUT,
} from "../types";

const initialState: WorkoutState = {
  workouts: [],
};

export const workoutReducer = (
  state = initialState,
  action: WorkoutAction
): WorkoutState => {
  switch (action.type) {
    case ADD_WORKOUT:
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
