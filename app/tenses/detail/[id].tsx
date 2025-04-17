import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AppTabView, TPages } from "@/components/ui/AppTabView";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { Tense, getTenses } from "@/modules/tenses";
import { TenseForms } from "@/modules/types";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Form } from "./items/form";
import { Tab } from "./items/tab";

type TForm = keyof TenseForms;

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const { Colors } = useAppColor();
  const data = getTenses(id as Tense);
  const [selected, setSelected] = useState(0);

  if (!data) return null;

  const { tense, form } = data;

  const dataHeader = Object.keys(form).map((item) => {
    switch (item) {
      case "affirmative":
        return "Khẳng định";
      case "negative":
        return "Phủ định";
      default:
        return "Nghi vấn";
    }
  });

  const dataTab: TPages = (Object.keys(form) as TForm[]).map((item, index) => ({
    key: (index + 1).toString(),
    component: <Form data={form[item]} />,
  }));

  const headers = ["Sử dụng", "Cấu trúc"];

  const pages: TPages = [
    {
      key: "1",
      component: <Tab data={data} />,
    },
    {
      key: "2",
      component: (
        <AppTabView
          headers={dataHeader}
          containerHeaderStyle={{
            borderRadius: Sizes.border_radius,
            marginHorizontal: Sizes.default,
          }}
          style={{ marginVertical: Sizes.default }}
          pages={dataTab}
          scrollEnabled={false}
          isHeaderScrollable={false}
        />
      ),
    },
  ];

  const renderTabItem = (item: string, index: number) => (
    <TouchableOpacity
      key={item + index}
      onPress={() => setSelected(index)}
      style={{
        borderRadius: Sizes.border_radius * 2,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingVertical: Sizes.tiny,
        backgroundColor: index === selected ? Colors.background : "transparent",
      }}
    >
      <ThemedText
        type="defaultSemiBold"
        style={{ color: index === selected ? Colors.tint : Colors.background }}
      >
        {item}
      </ThemedText>
    </TouchableOpacity>
  );

  return (
    <ThemedView headerTitle={tense.toUpperCase()}>
      <View
        style={{
          flexDirection: "row",
          padding: Sizes.wpx(2),
          minHeight: Sizes.wpx(40),
          backgroundColor: Colors.tint,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: Sizes.small,
          borderRadius: Sizes.border_radius,
        }}
      >
        {headers.map(renderTabItem)}
      </View>
      {pages[selected].component}
    </ThemedView>
  );
}
