import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { View } from "react-native";
import { AppCollapsible } from "../AppCollapsible";

export function CustomView2({
  name,
  data,
}: {
  name: string;
  data: string | string[];
}) {
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

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            flexWrap: "wrap",
            marginTop: Sizes.tiny,
          }}
        >
          {content.map((item) => (
            <ThemedText
              key={item}
              style={{
                color: Colors.text,
                borderRadius: Sizes.small,
                backgroundColor: Colors.background,
                borderColor: Colors.tint,
                borderWidth: 1,
                padding: Sizes.wpx(4),
              }}
              type="default"
            >
              {item}
            </ThemedText>
          ))}
        </View>
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
        {typeof data === "string" ? (
          <View
            style={{
              backgroundColor: randomColor,
              borderColor: Colors.tint,
              borderRadius: Sizes.small,
              borderWidth: 1,
              padding: Sizes.tiny,
              marginBottom: Sizes.small,
            }}
          >
            <ThemedText
              style={{
                color: Colors.while,
              }}
              type="default"
            >
              {data}
            </ThemedText>
          </View>
        ) : (
          data.map((item) => renderData(item))
        )}
      </View>
    </AppCollapsible>
  );
}
