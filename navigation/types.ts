import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Workout: {
    id: string;
    title: string;
    description: string;
  };
  MealPlan: {
    id: string;
    title: string;
    description: string;
  };
  History: undefined;
  // add any other screens you may have here
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

type WorkoutScreenRouteProp = RouteProp<RootStackParamList, "Workout">;
type WorkoutScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Workout"
>;

type MealPlanScreenRouteProp = RouteProp<RootStackParamList, "MealPlan">;
type MealPlanScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "MealPlan"
>;

// add any other screens' types you may have here

export {
  RootStackParamList,
  HomeScreenRouteProp,
  HomeScreenNavigationProp,
  WorkoutScreenRouteProp,
  WorkoutScreenNavigationProp,
  MealPlanScreenRouteProp,
  MealPlanScreenNavigationProp,
  // add any other screens' types you may have here
};
