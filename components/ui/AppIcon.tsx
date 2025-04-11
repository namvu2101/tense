import React from "react";

import {
  ColorValue,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { Sizes } from "@/constants/Sizes";

/*
 * @param {onlyIcon, hitSlop, onPressIn, onPress, disabled, touchStyle, type, name, color, size, style} props
 */

export type TypeIconName =
  | (typeof MaterialIcons)["name"]
  | (typeof Entypo)["name"]
  | (typeof EvilIcons)["name"]
  | (typeof Feather)["name"]
  | (typeof FontAwesome)["name"]
  | (typeof Fontisto)["name"]
  | (typeof Ionicons)["name"]
  | (typeof MaterialCommunityIcons)["name"]
  | (typeof FontAwesome5)["name"]
  | (typeof FontAwesome6)["name"]
  | (typeof Octicons)["name"];

export type IconType =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "Fontisto"
  | "Ionicons"
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "FontAwesome5"
  | "FontAwesome6"
  | "Octicons";

export interface IconProps {
  type?: IconType;
  name: TypeIconName;
  size?: number;
  color?: ColorValue;
  styleIcon?: StyleProp<TextStyle>; // vector-icons were built on top of text
}

export type AppIconProps = IconProps &
  TouchableOpacityProps & {
    onlyIcon?: boolean;
    touchStyle?: StyleProp<ViewStyle>;
    hasHitSlop?: boolean;
  };

export function AppIcon({
  type = "Ionicons",
  name,
  color,
  size,
  styleIcon,
  hitSlop,
  onlyIcon,
  onPress,
  ...touchProps
}: AppIconProps) {
  //without onPress
  //type, icon, color, size,
  const Icon = {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Fontisto,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    FontAwesome6,
    Octicons,
  }[type];
  if (onlyIcon || !onPress) {
    return (
      <Icon
        type={type}
        name={name}
        color={color}
        size={size}
        styleIcon={styleIcon}
      />
    );
  }
  let hitSlopRendering;
  if (hitSlop) {
    hitSlopRendering = {
      top: Sizes.smaller,
      left: Sizes.smaller,
      right: Sizes.smaller,
      bottom: Sizes.smaller,
      ...(hitSlop as object),
    };
  }
  return (
    <TouchableOpacity
      hitSlop={hitSlopRendering}
      onPress={onPress}
      {...touchProps}
    >
      <Icon
        type={type}
        name={name}
        color={color}
        size={size}
        styleIcon={styleIcon}
      />
    </TouchableOpacity>
  );
}
