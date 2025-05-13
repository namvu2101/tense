import { View, Text } from "react-native";
import React from "react";
import { useAppColor } from "@/hooks/useAppColor";
import { Sizes } from "@/constants/Sizes";
import { ThemedText } from "@/components/ThemedText";
import { AppCollapsible } from "../AppCollapsible";
import { WordSuggest } from "../WordSuggest";

export function CustomView1({
  name,
  data = [],
}: {
  name: string;
  data: string[];
}) {
  const { Colors } = useAppColor();
  const colors = [
    Colors.royalBlue,
    Colors.forestGreen,
    Colors.indigo,
    Colors.charcoalGray,
    Colors.teal,
  ];
  if (data.length === 0) return null;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const renderData = (item: string) => {
    const title = item.split(":")[0];
    const content = item.split(":")[1].split(",");
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
          {title}
        </ThemedText>
        <WordSuggest
          data={content}
          styleItem={{
            color: Colors.text,
            borderRadius: Sizes.small,
            backgroundColor: Colors.background,
            borderColor: Colors.tint,
            borderWidth: 1,
            padding: Sizes.wpx(4),
          }}
          type="default"
        />
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
