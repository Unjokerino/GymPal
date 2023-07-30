import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { workoutReducer } from "./workout/reducer";
import { mealPlanReducer } from "./mealPlan/reducer";
import { MealPlanState, WorkoutState } from "./types";

// Define the root state shape
export type RootState = {
  workout: WorkoutState;
  mealPlan: MealPlanState;
};

// Combine the reducers
const rootReducer = combineReducers({
  workout: workoutReducer,
  mealPlan: mealPlanReducer,
});

// Define middleware
const loggerMiddleware = createLogger();

// Define store enhancers
const enhancer = applyMiddleware(thunkMiddleware, loggerMiddleware);

// Create the store
export const store = createStore(rootReducer, enhancer);
