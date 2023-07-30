// src/redux/mealPlan/types.ts

// Define the meal plan object shape
export type MealPlan = {
  id: string;
  name: string;
  description: string;
  meals: Meal[];
};

// Define the meal object shape
export type Meal = {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
};

// Define the ingredient object shape
export type Ingredient = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
};

// Define the meal plan state shape
export type MealPlanState = {
  mealPlan: MealPlan | null;
};

// Define action types
export const SET_MEAL_PLAN = "SET_MEAL_PLAN";

// Define action interfaces
interface SetMealPlanAction {
  type: typeof SET_MEAL_PLAN;
  payload: MealPlan;
}

export type MealPlanAction = SetMealPlanAction;

// src/redux/workout/types.ts

// src/redux/workout/types.ts

// Define the workout object shape
export type Workout = {
  id: string;
  name: string;
  description: string;
};

// Define the workout state shape
export type WorkoutState = {
  workouts: Workout[];
};

// Define action types
export const ADD_WORKOUT = "ADD_WORKOUT";
export const DELETE_WORKOUT = "DELETE_WORKOUT";

// Define action interfaces
interface AddWorkoutAction {
  type: typeof ADD_WORKOUT;
  payload: Workout;
}

interface DeleteWorkoutAction {
  type: typeof DELETE_WORKOUT;
  payload: string; // ID of the workout to delete
}

export type WorkoutAction = AddWorkoutAction | DeleteWorkoutAction;
