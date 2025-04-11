import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useAppColor } from "@/hooks/useAppColor";
import { Route, router } from "expo-router";

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
      description: "Hiện tại",
      route: "/tenses/present",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Pass Tense",
      description: "Quá khứ",
      route: "/tenses/pass",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Future Tense",
      description: "Tương lai",
      route: "/tenses/future",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
  ];

  return (
    <ThemedView>
      <ScrollView>
        {data.map((item, index) => (
          <TouchableOpacity
            key={item.route}
            style={{
              borderColor: Colors.tint,
              borderWidth: 2,
              borderRadius: 10,
              padding: 10,
              margin: 10,
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
