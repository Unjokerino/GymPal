import { View, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../constants";
import { Text } from "./";
export const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: isFocused ? colors.primary : "transparent",
              paddingVertical: isFocused ? 29 : 0,
              width: 100,
              justifyContent: "center",
              borderRadius: 44,
            }}
          >
            <Text
              style={{
                color: isFocused ? colors.white : colors.gray300,
                textAlign: "center",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: colors.gray400,
    height: 100,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingHorizontal: 25,
    bottom: 0,
  },
});
