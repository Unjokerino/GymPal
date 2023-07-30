// src/redux/mealPlan/reducer.ts

import { MealPlanAction, MealPlanState, SET_MEAL_PLAN } from "../types";

const initialState: MealPlanState = {
  mealPlan: null,
};

export const mealPlanReducer = (
  state = initialState,
  action: MealPlanAction
): MealPlanState => {
  switch (action.type) {
    case SET_MEAL_PLAN:
      return {
        ...state,
        mealPlan: action.payload,
      };
    default:
      return state;
  }
};
