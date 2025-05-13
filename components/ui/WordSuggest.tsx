import { Sizes } from "@/constants/Sizes";
import React from "react";
import { StyleProp, TextStyle, TouchableOpacity, View } from "react-native";
import { ThemedText, ThemedTextProps } from "../ThemedText";
import { useAppColor } from "@/hooks/useAppColor";

export function WordSuggest({
  data,
  styleItem,
  type = "default",
  onPress,
}: {
  data: string[];
  styleItem?: StyleProp<TextStyle>;
  type?: ThemedTextProps["type"];
  onPress?: (item: string) => void;
}) {
  const { Colors } = useAppColor();
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginVertical: Sizes.tiny,
      }}
    >
      {data.map((item, index) => (
        <TouchableOpacity
          key={item + index}
          onPress={() => onPress?.(item)}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <ThemedText
            type={type}
            style={[
              {
                padding: Sizes.tiny,
                paddingHorizontal: Sizes.little,
                backgroundColor: Colors.tint,
                color: Colors.background,
                borderRadius: Sizes.big,
                textAlign: "center",
              },
              styleItem,
            ]}
          >
            {item}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );
}
