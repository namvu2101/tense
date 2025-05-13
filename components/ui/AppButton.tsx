import { Styles } from "@/constants/Commons";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import React from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { AppIcon, IconProps } from "./AppIcon";

type TAppButton = {
  show?: boolean;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title: string;
  icon?: IconProps;
  onPress?: () => void;
};

export function AppButton(props: Readonly<TAppButton>) {
  const { title, titleStyle, onPress, style, icon, show = true } = props;
  const { Colors } = useAppColor();
  if (!show) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          padding: Sizes.small,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: Colors.primary,
          borderRadius: Sizes.big,
        },
        Styles.shadow,
        style,
      ]}
    >
      <ThemedText type="defaultSemiBold" style={[{color:Colors.background},titleStyle]}>
        {title}
      </ThemedText>
      {icon?.name && <AppIcon {...icon} />}
    </TouchableOpacity>
  );
}
