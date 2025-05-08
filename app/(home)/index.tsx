import React from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useAppColor } from "@/hooks/useAppColor";
import { RelativePathString, Route, router } from "expo-router";
import { images } from "@/assets/images";
import { Sizes } from "@/constants/Sizes";

type TData = {
  name: string;
  description: string;
  route: Route;
  image?: ImageSourcePropType;
};

export default function Home() {
  const { Colors } = useAppColor();
  const data: TData[] = [
    {
      name: "Ngữ pháp",
      description:
        "Hệ thống quy tắc và cấu trúc giúp bạn sử dụng tiếng anh",
      route: "/tenses",
      image: images.grammar,
    },
    {
      name: "Phát âm",
      description:
        "Hướng dẫn cách phát âm chuẩn các âm trong tiếng Anh",
      route: "/pronounce",
      image: images.grammar,
    },
    {
      name: "Từ vựng",
      description:
        "Làm quen với những dạng từ thường xuất hiện trong tiếng Anh",
      route: "/vocabulary",
      image: images.grammar,
    },
    {
      name: "Luyện tập",
      description:
        "Tổng hợp bài tập đa dạng giúp bạn củng cố và nâng cao kỹ năng",
      route: "/tests",
      image: images.grammar,
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
              source={item.image}
              style={{
                height: Sizes.wpx(50),
                width: Sizes.wpx(50),
                borderRadius: Sizes.default,
              }}
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
