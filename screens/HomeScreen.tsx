import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-elements";
import { colors } from "../constants";
import { Text } from "../components";

const CARD_WIDTH = (Dimensions.get("window").width - 48) * 0.25;

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const workouts = [
    {
      title: "Full Body",
    },
    {
      title: "Upper Body",
    },
    {
      title: "Lower Body",
    },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top + 24 }]}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={require("../assets/default_avatar.png")}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.caption}>Welcome back</Text>
          <Text style={styles.title}>John Doe</Text>
        </View>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={[styles.card, styles.mealPlanCard]}>
          <ImageBackground
            resizeMode="cover"
            source={require("../assets/lines_background.png")}
            style={styles.mealPlanInfo}
          >
            <Text>Get your custom meal plan!</Text>
            <Text style={{ paddingVertical: 8 }}>
              <Text
                style={[
                  styles.title,
                  { fontSize: 48, fontFamily: "RobotoBold" },
                ]}
              >
                5
              </Text>{" "}
              Easy steps
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("MealPlan")}
              style={[styles.button, { backgroundColor: colors.white }]}
            >
              <Text style={styles.buttonText}>Get Plan</Text>
            </TouchableOpacity>
          </ImageBackground>
          <Image
            resizeMode="contain"
            style={styles.mealPlanImage}
            source={require("../assets/meal_plan.png")}
          />
        </View>

        <View style={styles.cardContainer}>
          {workouts.map((workout, index) => {
            return (
              <TouchableOpacity key={index} style={[styles.smallCard]}>
                <Text style={styles.smallCardCaption}>{workout.title}</Text>
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity style={[styles.smallCard, styles.actionSmallCard]}>
            <Image source={require("../assets/add.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.card}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingHorizontal: 16,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  caption: {
    fontSize: 10,
    color: colors.gray300,
  },
  smallCardCaption: {
    fontSize: 14,
    color: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },

  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 34,
    paddingVertical: 13,
    borderRadius: 16,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#000",
    fontSize: 14,

    fontFamily: "Roboto",
  },
  avatar: {
    marginRight: 16,
    width: 45,
    height: 45,
    borderRadius: 18,
    backgroundColor: colors.gray400,
  },
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 8,
    justifyContent: "space-between",
  },
  smallCard: {
    backgroundColor: colors.gray400,
    borderRadius: 30,
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  actionSmallCard: {
    backgroundColor: colors.primary,
  },
  card: {
    backgroundColor: colors.gray400,
    borderRadius: 26,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    paddingTop: 4,
  },
  mealPlanCard: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 22,
    flexDirection: "row",
    height: 200,
    alignItems: "center",
  },
  mealPlanImage: {
    height: "100%",
    flex: 0.5,
  },
  mealPlanInfo: {
    flex: 1,
    height: "100%",
    paRddingRight: 16,
    justifyContent: "center",
  },
  contentContainer: {
    paddingHorizontal: 16,
    width: "100%",
  },
});

export default HomeScreen;
