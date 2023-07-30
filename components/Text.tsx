import {
  Text as DefaultText,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextProps,
  TextStyle,
} from "react-native";
import { colors } from "../constants";
import React, { ReactElement } from "react";

export const Text = ({
  children,
  style,
  ...props
}: {
  children: any[] | string | JSX.Element;
  style?: StyleProp<TextStyle>;
  props?: TextProps;
}) => {
  return (
    <DefaultText style={[styles.text, style]} {...props}>
      {children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
  },
});
