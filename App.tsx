// src/App.jsx

import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import AppNavigator from "./navigation";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    MutantAcademyBB: require("./assets/fonts/MutantAcademyBB.ttf"),
    MutantAcademyDCBB: require("./assets/fonts/MutantAcademyDCBB.ttf"),
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <AppNavigator />;
};

export default App;
