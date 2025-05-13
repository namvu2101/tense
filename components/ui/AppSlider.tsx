import React, { useEffect } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { AppIcon, IconProps } from "./AppIcon";

type SliderProps = {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string | number;
  onValueChange?: (value: number) => void;
  trackSize?: number;
  thumbColor?: string;
  thumbSize?: number;
  vertical?: boolean;
  styles?: StyleProp<ViewStyle>;
  size?: number;
  activeStyle?: StyleProp<ViewStyle>;
  hideThumb?: boolean;
  icon?: IconProps;
  trackColor?: string;
};

export const AppSlider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  onValueChange,
  trackSize = 200,
  thumbColor = "#4CAF50",
  size = 4,
  vertical = false,
  styles,
  activeStyle,
  hideThumb = false,
  thumbSize = size + 10,
  icon,
  trackColor = "#ccc",
}) => {
  const range = max - min;
  const position = useSharedValue(0);
  const startOffset = useSharedValue(0);

  useEffect(() => {
    const px = valueToPosition(Number(defaultValue));
    position.value = px;
  }, [defaultValue]);

  const valueToPosition = (val: number) => {
    return ((val - min) / range) * (trackSize - thumbSize);
  };

  const onChange = (value: number) => {
    "worklet";
    if (onValueChange) {
      const raw = (value / (trackSize - thumbSize)) * range + min;
      const stepped = Math.round(raw / step) * step;
      const newValue = Math.min(max, Math.max(min, stepped));
      runOnJS(onValueChange)?.(newValue);
    }
  };

  const pan = Gesture.Pan()
    .onStart(() => {
      startOffset.value = position.value;
    })
    .onUpdate((e) => {
      const maxTranslate = trackSize - (hideThumb ? 0 : thumbSize);
      const translation = vertical ? -e.translationY : e.translationX;
      const nextPos = Math.max(
        0,
        Math.min(startOffset.value + translation, maxTranslate)
      );
      position.value = nextPos;
      onChange(nextPos);
    });

  const thumbStyle = useAnimatedStyle(() => {
    const transform = [];
    if (vertical) {
      transform.push({
        translateY: trackSize - position.value - thumbSize,
      });
    } else {
      transform.push({ translateX: position.value });
    }
    return { transform };
  });

  const activeTrackStyle = useAnimatedStyle(() => {
    const style: StyleProp<ViewStyle> = {
      backgroundColor: thumbColor,
      borderRadius: size,
      justifyContent: "center",
      alignItems: "center",
    };
    if (vertical) {
      style.width = size;
      style.height = position.value;
      style.bottom = 0;
    } else {
      style.width = position.value + (hideThumb ? 0 : size);
      style.height = size;
    }
    return style;
  });

  const containerStyle: StyleProp<ViewStyle> = {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  };

  if (vertical) {
    containerStyle.height = trackSize;
  } else {
    containerStyle.width = trackSize;
  }

  const trackStyle: StyleProp<ViewStyle> = {
    backgroundColor: trackColor,
    borderRadius: size / 2,
    justifyContent: "flex-end",
    overflow: "hidden",
  };
  if (vertical) {
    trackStyle.width = size;
    trackStyle.height = trackSize;
  } else {
    trackStyle.width = trackSize;
    trackStyle.height = size;
  }

  const thumbBaseStyle: any = {
    width: thumbSize,
    height: thumbSize,
    borderRadius: thumbSize / 2,
    backgroundColor: hideThumb ? undefined : thumbColor,
    position: "absolute",
  };
  if (vertical) {
    thumbBaseStyle.top = 0;
  } else {
    thumbBaseStyle.left = 0;
  }

  return (
    <View style={[containerStyle, styles]}>
      <View style={trackStyle}>
        <Animated.View style={[activeTrackStyle, activeStyle]}>
          {icon && (
            <AppIcon
              name={icon.name}
              size={icon.size ?? size / 3}
              color={icon.color}
            />
          )}
        </Animated.View>
      </View>
      <GestureDetector gesture={pan}>
        <Animated.View style={[thumbBaseStyle, thumbStyle]} />
      </GestureDetector>
    </View>
  );
};
