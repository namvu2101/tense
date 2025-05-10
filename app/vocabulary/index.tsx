import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
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
  return (
    <ThemedView headerTitle="Vocabulary">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: bottom,
        }}
      >
        {data.map((item) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];

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
                backgroundColor: randomColor,
              }}
              onPress={() => {
                router.push({
                  pathname: "/vocabulary/detail/[id]",
                  params: { id: item.id },
                });
              }}
            >
              <ThemedText type="defaultSemiBold" style={{ color: Colors.while }}>
                {item.name}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ThemedView>
  );
}
