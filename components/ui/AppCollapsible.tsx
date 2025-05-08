import React, { useEffect, useRef, useState } from "react";
import {
  View,
  LayoutAnimation,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Platform,
  UIManager,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppColor } from "@/hooks/useAppColor";
import { Sizes } from "@/constants/Sizes";
import { AppIcon, TypeIconName } from "./AppIcon";
import { ThemedText } from "../ThemedText";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type TAppCollapsibleProps = {
  title?: string | React.ReactElement;
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  ExtraHeader?: React.ReactNode;
  iconDropDownType?: boolean;
  isHide?: boolean;
  onTitlePress?: () => void;
  titleStyle?: TextStyle;
};

export function AppCollapsible({
  title,
  children,
  containerStyle,
  ExtraHeader,
  iconDropDownType = false,
  isHide = false,
  onTitlePress,
  titleStyle,
}: Readonly<TAppCollapsibleProps>) {
  const { Colors } = useAppColor();
  const [collapsed, setCollapsed] = useState(isHide);
  const [contentHeight, setContentHeight] = useState(0);
  const heightValue = useSharedValue(0);
  const measured = useRef(false); // tránh đo nhiều lần

  useEffect(() => {
    heightValue.value = withTiming(collapsed ? 0 : contentHeight, {
      duration: 200,
    });
  }, [collapsed, contentHeight]);

  const toggleCollapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed((prev) => !prev);
  };

  const handleHeaderPress = () => {
    onTitlePress ? onTitlePress() : toggleCollapse();
  };
  let iconName: TypeIconName = "caret-up";
  if (iconDropDownType) {
    iconName = "arrow-up";
  }
  if (collapsed) {
    iconName = "caret-down";
    if (iconDropDownType) {
      iconName = "arrow-down";
    }
  }
  const IconDropDown = {
    false: (
      <AppIcon
        name={iconName}
        onPress={handleHeaderPress}
        size={Sizes.larger}
        color={Colors.background}
      />
    ),
    true: (
      <AppIcon
        name={iconName}
        onPress={handleHeaderPress}
        size={Sizes.larger}
      />
    ),
  }[`${iconDropDownType}`];

  const animatedStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  return (
    <View
      style={[
        {
          backgroundColor: Colors.background,
          borderRadius: Sizes.border_radius * 2,
          overflow: "hidden",
          marginTop: Sizes.medium,
        },
        containerStyle,
      ]}
    >
      {/* Header */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleHeaderPress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: Sizes.smaller,
          backgroundColor: Colors.tint,
        }}
      >
        <ThemedText
          type="subtitle"
          style={[{ flex: 1, color: Colors.background }, titleStyle]}
        >
          {title}
        </ThemedText>
        {ExtraHeader}
        {IconDropDown}
      </TouchableOpacity>

      {/* Hidden content to measure height (render once) */}
      {!measured.current && (
        <View
          style={{ position: "absolute", opacity: 0, zIndex: -1 }}
          onLayout={(e) => {
            if (!measured.current) {
              setContentHeight(e.nativeEvent.layout.height);
              measured.current = true;
            }
          }}
        >
          {children}
        </View>
      )}

      {/* Collapsible animated content */}
      <Animated.View style={[animatedStyle, { overflow: "hidden" }]}>
        {children}
      </Animated.View>
    </View>
  );
}
