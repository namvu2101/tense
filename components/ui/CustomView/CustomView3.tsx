import { View, Text } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { AppCollapsible } from "../AppCollapsible";

export function CustomView3({ name, data }: { name: string; data: string[] }) {
  const { Colors } = useAppColor();
  const colors = [
    Colors.royalBlue,
    Colors.forestGreen,
    Colors.indigo,
    Colors.charcoalGray,
    Colors.teal,
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const renderData = (item: string) => {
    return (
      <View
        key={item}
        style={{
          backgroundColor: randomColor,
          borderColor: Colors.tint,
          borderRadius: Sizes.small,
          borderWidth: 1,
          padding: Sizes.tiny,
          marginBottom: Sizes.small,
        }}
      >
        <ThemedText type="defaultSemiBold" style={{ color: Colors.while }}>
          {item}
        </ThemedText>
      </View>
    );
  };

  return (
    <AppCollapsible title={name}>
      <View
        style={{
          borderColor: Colors.tint,
          padding: Sizes.default,
          borderWidth: 1,
          borderBottomRightRadius: Sizes.border_radius * 2,
          borderBottomLeftRadius: Sizes.border_radius * 2,
          marginBottom: Sizes.default,
        }}
      >
        {data.map((item) => renderData(item))}
      </View>
    </AppCollapsible>
  );
}
