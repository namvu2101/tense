import { View, Text, ViewStyle, TextStyle } from "react-native";
import React, { useMemo } from "react";
import { Sizes } from "@/constants/Sizes";
import { ThemedText } from "@/components/ThemedText";
import { useAppColor } from "@/hooks/useAppColor";

export default function Message({
  item,
}: {
  item: { role: "user" | "bot"; text: string };
}) {
  const { Colors } = useAppColor();

  const style: TextStyle = useMemo(() => {
    if (item.role === "user") {
      return { alignSelf: "flex-end", backgroundColor: Colors.primary };
    }
    return { alignSelf: "flex-start", backgroundColor: Colors.tint };
  }, [item]);

  return (
    <View style={{ marginVertical: Sizes.tiny }}>
      <ThemedText
        type="defaultSemiBold"
        style={[
          {
            padding: Sizes.tiny,
            maxWidth: "80%",
            borderRadius: Sizes.default,
            color: Colors.while,
          },
          style,
        ]}
      >
        {item.text}
      </ThemedText>
    </View>
  );
}
