import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useAppColor } from "@/hooks/useAppColor";
import { RelativePathString, Route, router } from "expo-router";

type TData = {
  name: string;
  description: string;
  route: Route;
  image?: string;
};

export default function Home() {
  const { Colors } = useAppColor();
  const data: TData[] = [
    {
      name: "Ngữ pháp",
      description: "A framework for building native apps using React",
      route: "/tenses",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Phát Âm",
      description: "A framework for building native apps using React",
      route: "/pronounce",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Luyện tập",
      description: "A framework for building native apps using React",
      route: "/tests",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
  ];

  return (
    <ThemedView headerShow={false}>
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
              router.push(item.route as RelativePathString);
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
