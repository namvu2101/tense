import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { TOptionsSymbol } from "@/modules/types";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

export type TAppSingleSelected = {
  data: TOptionsSymbol[];
  size?: number;
};

const WordDisplay = ({ word }: { word: TOptionsSymbol }) => {
  const { value, underline } = word;
  if (!underline) {
    return <ThemedText>{value}</ThemedText>;
  }
  const startIndex = value.indexOf(underline);
  if (startIndex === -1) return <ThemedText>{value}</ThemedText>; // fallback nếu không tìm thấy

  const before = value.slice(0, startIndex);
  const underlined = value.slice(startIndex, startIndex + underline.length);
  const after = value.slice(startIndex + underline.length);

  return (
    <ThemedText>
      {before}
      <ThemedText style={{ textDecorationLine: "underline" }}>
        {underlined}
      </ThemedText>
      {after}
    </ThemedText>
  );
};

export function AppSingleSelected(props: Readonly<TAppSingleSelected>) {
  const { data = [], size = Sizes.wpx(20) } = props;

  const { Colors } = useAppColor();
  const [answer, setAnswer] = useState<string>("");
  const onSelected = (item: string) => {
    setAnswer(item);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {data.map((option) => (
        <TouchableOpacity
          onPress={() => onSelected(option.value)}
          key={option.value}
          style={{
            flexDirection: "row",
            gap: Sizes.wpx(4),
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: size,
              width: size,
              borderRadius: size / 2,
              borderColor: Colors.tint,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.background,
            }}
          >
            <View
              style={{
                height: size - 10,
                width: size - 10,
                borderRadius: size / 2,
                backgroundColor:
                  answer == option.value ? Colors.tint : undefined,
              }}
            />
          </View>
          <WordDisplay word={option} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
