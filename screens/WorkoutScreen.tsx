import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  RootStackParamList,
  WorkoutScreenRouteProp,
} from "../navigation/types";

type Props = {
  route: WorkoutScreenRouteProp;
  navigation: NativeStackScreenProps<RootStackParamList, "Workout">;
};

const WorkoutScreen: React.FC<Props> = ({ route, navigation }) => {
  const { title = "", description = "" } = route.params || {};

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  // add more styles as needed
});

export default WorkoutScreen;
