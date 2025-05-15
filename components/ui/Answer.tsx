import { Convert } from "@/constants/Convert";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { TOptions } from "@/modules/types";
import {
  StyleProp,
  TextStyle,
  View,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import { ThemedTextProps, ThemedText } from "../ThemedText";
import { useController, useFormState, useWatch } from "react-hook-form";
import { useEffect, useMemo } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export function Answers({
  data,
  styleItem,
  type = "default",
  onPress,
  name = "",
  isEdit = true,
  answer = "",
}: {
  data: TOptions[];
  styleItem?: StyleProp<TextStyle>;
  type?: ThemedTextProps["type"];
  onPress?: (item: TOptions) => void;
  name?: string;
  isEdit?: boolean;
  answer?: string;
}) {
  const { Colors } = useAppColor();
  const wrap = data.some((item) => item.value.length > 20);
  const newData = useMemo(() => Convert.shuffleArray(data), [data]);
  const height = useSharedValue(0);

  const {
    fieldState: { error },
    field: { value, onChange },
  } = useController({ name, rules: { required: true } });

  const isSelect = (id: string) => {
    if (value === id) return true;
    return false;
  };

  const isCorrect = (id: string) => {
    if (answer === id && !isEdit) return true;
    return false;
  };

  useEffect(() => {
    height.value = withTiming(error ? 0 : 40, {
      duration: 200,
    });
  }, [error]);
  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          marginVertical: Sizes.tiny,
        }}
      >
        {newData.map((item) => (
          <TouchableOpacity
            style={{
              paddingHorizontal: Sizes.little,
              backgroundColor: isSelect(item.id)
                ? Colors.primary
                : isCorrect(item.id)
                ? Colors.error
                : Colors.tint,
              borderRadius: Sizes.big,
              padding: Sizes.tiny,
              alignItems: "center",
              width: wrap ? "100%" : "48%",
            }}
            key={item.id}
            onPress={() => {
              if (!isEdit) return;
              if (name.length != 0) {
                onChange(item.id);
              }
              onPress?.(item);
            }}
            activeOpacity={isEdit ? 0 : 1}
          >
            <WordDisplay word={item} styleItem={styleItem} type={type} />
          </TouchableOpacity>
        ))}
      </View>
      {error && (
        <Animated.View style={animatedStyle}>
          <ThemedText style={{ color: "red" }}>Bạn chưa chọn đáp án</ThemedText>
        </Animated.View>
      )}
    </View>
  );
}

const WordDisplay = ({
  word,
  type,
  styleItem,
}: {
  word: TOptions;
  type: any;
  styleItem: any;
}) => {
  const { Colors } = useAppColor();
  const { value, underline } = word;
  if (!underline) {
    return (
      <ThemedText
        type={type}
        style={[
          {
            color: Colors.background,
            textAlignVertical: "center",
          },
          styleItem,
        ]}
      >
        {value}
      </ThemedText>
    );
  }
  const startIndex = value.indexOf(underline);
  if (startIndex === -1) return <ThemedText>{value}</ThemedText>; // fallback nếu không tìm thấy

  const before = value.slice(0, startIndex);
  const underlined = value.slice(startIndex, startIndex + underline.length);
  const after = value.slice(startIndex + underline.length);

  return (
    <ThemedText
      type={type}
      style={[
        {
          color: Colors.background,
          textAlignVertical: "center",
        },
        styleItem,
      ]}
    >
      {before}
      <ThemedText
        type={type}
        style={[
          {
            color: Colors.background,
            textAlignVertical: "center",
            textDecorationLine: "underline",
          },
          styleItem,
        ]}
      >
        {underlined}
      </ThemedText>
      {after}
    </ThemedText>
  );
};
