import { useAppColor } from "@/hooks/useAppColor";
import React from "react";
import {
  ColorValue,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  ActivityIndicator,
} from "react-native";

import { ThemedText } from "../ThemedText";
import { Sizes } from "@/constants/Sizes";

export interface TAppViewLoadingProps {
  loadingText?: string;
  loadingTextStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  color?: ColorValue;
  sizeSpinner?: number;
}

export function AppViewLoading({
  style,
  color,
  sizeSpinner,
  loadingText,
  loadingTextStyle,
}: Readonly<TAppViewLoadingProps>) {
  const { Colors } = useAppColor();

  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        },
        style,
      ]}
    >
      <ActivityIndicator
        size={sizeSpinner ?? 24}
        color={color ?? Colors.tint}
      />
      {!!loadingText && (
        <ThemedText
          style={[{ color, paddingRight: Sizes.default / 2 }, loadingTextStyle]}
        >
          {loadingText}
        </ThemedText>
      )}
    </View>
  );
}
