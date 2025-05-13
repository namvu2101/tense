import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Sizes } from "@/constants/Sizes";
import { router, RelativePathString } from "expo-router";
import { grammarData } from "@/modules/grammar-data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppColor } from "@/hooks/useAppColor";

export default function Vocabulary() {
  const { bottom } = useSafeAreaInsets();
  const { Colors } = useAppColor();
  const data = Object.entries(grammarData).map(([key, value]) => ({
    id: key,
    name: value.name,
  }));
  const colors = [
    Colors.royalBlue,
    Colors.forestGreen,
    Colors.indigo,
    Colors.charcoalGray,
    Colors.teal,
  ];
  // Shuffle data và gán màu không trùng gần nhau
  const coloredData = useMemo(() => {
    const result: Array<{ id: string; name: string; color: string }> = [];
    let prevColor: string | null = null;

    for (const item of data) {
      // Lọc ra các màu khác với màu trước
      const availableColors = colors.filter((c) => c !== prevColor);
      // Random trong các màu hợp lệ
      const color =
        availableColors[Math.floor(Math.random() * availableColors.length)];
      result.push({ ...item, color });
      prevColor = color;
    }

    return result;
  }, [data, colors]);
  return (
    <ThemedView headerTitle="Vocabulary">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: bottom,
        }}
      >
        {coloredData.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                borderColor: Colors.tint,
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                margin: 10,
                alignItems: "center",
                gap: 10,
                backgroundColor: item.color,
              }}
              onPress={() => {
                router.push({
                  pathname: "/vocabulary/detail/[id]",
                  params: { id: item.id },
                });
              }}
            >
              <ThemedText
                type="defaultSemiBold"
                style={{ color: Colors.while }}
              >
                {item.name}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ThemedView>
  );
}
