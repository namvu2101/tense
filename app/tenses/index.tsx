import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useAppColor } from "@/hooks/useAppColor";
import { Route, router } from "expo-router";
import { Sizes } from "@/constants/Sizes";

type TData = {
  name: string;
  description: string;
  route: Route;
  image?: string;
};

export default function Tenses() {
  const { Colors } = useAppColor();
  const data: TData[] = [
    {
      name: "Present Tense",
      description: "Thì hiện tại",
      route: "/tenses/present",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Pass Tense",
      description: "Thì quá khứ",
      route: "/tenses/past",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Future Tense",
      description: "Thì tương lai",
      route: "/tenses/future",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Luyện tập",
      description: "Bài tập với các thì",
      route: "/tenses/practice",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
  ];

  return (
    <ThemedView headerTitle="Các thì trong Tiếng Anh">
      <ScrollView>
        {data.map((item, index) => (
          <TouchableOpacity
            key={item.route}
            style={{
              borderColor: Colors.tint,
              borderWidth: Sizes.border * 2,
              borderRadius: Sizes.border_radius * 2,
              padding: Sizes.little,
              margin: Sizes.little,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
            onPress={() => {
              router.push(item.route);
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ height: 50, width: 50 }}
            />
            <View style={{ flexShrink: 1 }}>
              <ThemedText type="subtitle">{item.name}</ThemedText>
              <ThemedText>{item.description}</ThemedText>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ThemedView>
  );
}
