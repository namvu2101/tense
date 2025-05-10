import { Sizes } from "@/constants/Sizes";
import React from "react";
import { StyleProp, TextStyle, View } from "react-native";
import { ThemedText, ThemedTextProps } from "../ThemedText";
import { useAppColor } from "@/hooks/useAppColor";

export function WorkSuggest({
  data,
  styleItem,
  type = "default",
}: {
  data: string[];
  styleItem?: StyleProp<TextStyle>;
  type?: ThemedTextProps["type"];
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
      {data.map((item) => (
        <ThemedText
          key={item}
          type={type}
          style={[
            {
              padding: Sizes.tiny,
              paddingHorizontal: Sizes.little,
              backgroundColor: Colors.tint,
              color: Colors.background,
              borderRadius: Sizes.big,
              textAlignVertical: "center",
            },
            styleItem,
          ]}
        >
          {item}
        </ThemedText>
      ))}
    </View>
  );
}
