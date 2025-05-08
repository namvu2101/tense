import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useAppColor } from "@/hooks/useAppColor";
import { ThemedView } from "@/components/ThemedView";
import useGetVocabulary from "../modules/useGetVocabulary";
import { ThemedText } from "@/components/ThemedText";
import { AppCollapsible } from "@/components/ui/AppCollapsible";
import { Sizes } from "@/constants/Sizes";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const { Colors } = useAppColor();
  const [selected, setSelected] = useState(0);
  const { data } = useGetVocabulary(id as any);
  if (!data) return;
  const CustomItem = ({
    name,
    data,
  }: {
    name: string;
    data: string | string[];
  }) => {
    const renderData = () => {
      if (typeof data === "string") {
        return <ThemedText type="default">{data}</ThemedText>;
      } else
        return data.map((item, index) => (
          <ThemedText key={index} type="default">
            {item}
          </ThemedText>
        ));
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
          {renderData()}
        </View>
      </AppCollapsible>
    );
  };
  return (
    <ThemedView headerTitle={id.toString().replace("_", " ").toUpperCase()}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: Sizes.small }}
      >
        <CustomItem name="Khái niệm" data={data.concept} />
        <CustomItem name="Cấu trúc" data={data.structure} />
        <CustomItem name="Vị trí" data={data.position} />
        <CustomItem name="Dấu hiệu" data={data.signs} />
        <CustomItem name="Cách dùng" data={data.usage} />
        <CustomItem name="Loại" data={data.types} />
        <CustomItem name="Cấu trúc" data={data.special_cases} />
      </ScrollView>
    </ThemedView>
  );
}
