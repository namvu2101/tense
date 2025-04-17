import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useAppColor } from "@/hooks/useAppColor";
import { Route, router } from "expo-router";

type TData = {
  name: string;
  description: string;
  route: string;
  image?: string;
};

export default function PassList() {
  const { Colors } = useAppColor();

  const data: TData[] = [
    {
      name: "Past Simple",
      description: "Quá khứ đơn",
      route: "pass-simple",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Past Continuous",
      description: "Quá khứ tiếp diễn",
      route: "pass-continuous",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Past Perfect",
      description: "Quá khứ hoàn thành",
      route: "pass-perfect",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Past Perfect Continuous",
      description: "Quá khứ hoàn thành tiếp diễn",
      route: "pass-perfect-continuous",
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
              router.push({
                pathname: "/tenses/detail/[id]",
                params: { id: item.route },
              });
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
