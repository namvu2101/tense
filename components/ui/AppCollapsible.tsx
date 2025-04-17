import { useAppColor } from "@/hooks/useAppColor";
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
import { AppIcon, TypeIconName } from "./AppIcon";
import { Sizes } from "@/constants/Sizes";
import { ThemedText } from "../ThemedText";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

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
  isHide = true,
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

  const iconName: TypeIconName = iconDropDownType
    ? collapsed
      ? "arrow-down"
      : "arrow-up"
    : collapsed
    ? "caret-down"
    : "caret-up";

  const iconSize = iconDropDownType ? Sizes.larger : Sizes.big;

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
        <AppIcon name={iconName} size={iconSize} color={Colors.background} />
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
