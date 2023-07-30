import React from "react";

import HomeScreen from "../screens/HomeScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import MealPlanScreen from "../screens/MealPlanScreen";
import { RootStackParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBar } from "../components";

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={BottomTabBar} initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="History"
          component={MealPlanScreen}
          options={({ route }) => ({
            headerTitle: route.params?.title ?? "Meal Plan",
          })}
        />
        <Tab.Screen
          name="Workout"
          component={WorkoutScreen}
          options={({ route }) => ({
            headerTitle: route.params?.title ?? "Workout",
          })}
        />
        <Tab.Screen
          name="MealPlan"
          component={MealPlanScreen}
          options={({ route }) => ({
            headerTitle: route.params?.title ?? "Meal Plan",
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
