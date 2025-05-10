import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AppViewLoading } from "@/components/ui/AppLoading";
import {
  CustomView1,
  CustomView2,
  CustomView3,
} from "@/components/ui/CustomView";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import useGetVocabulary from "../modules/useGetVocabulary";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const { Colors } = useAppColor();
  const { data, isLoading } = useGetVocabulary(id as any);
  if (!data) return;
  if (isLoading) return <AppViewLoading style={{ flex: 1 }} />;

  return (
    <ThemedView headerTitle={id.toString().replace("_", " ").toUpperCase()}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: Sizes.small }}
      >
        <View
          style={{
            padding: Sizes.small,
            borderRadius: Sizes.big,
            backgroundColor: Colors.line,
            borderColor: Colors.tint,
            borderWidth: 1,
          }}
        >
          <ThemedText
            type="default"
            style={{ textAlign: "center", color: Colors.blue }}
          >
            {data.concept}
          </ThemedText>
        </View>
        <CustomView2 name="Cấu trúc" data={data.structure} />
        <CustomView2 name="Vị trí" data={data.position} />
        <CustomView3 name="Dấu hiệu" data={data.signs} />
        <CustomView1 name="Loại" data={data.types} />
        <CustomView1 name="Sử dụng" data={data.usage} />
        <CustomView3 name="Đặc biệt" data={data.special_cases} />
      </ScrollView>
    </ThemedView>
  );
}
