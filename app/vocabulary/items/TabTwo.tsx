import React from "react";
import { ScrollView, View } from "react-native";
import { SceneRendererProps } from "react-native-tab-view";
import { useWatch } from "react-hook-form";
import { CustomView1, CustomView3 } from "@/components/ui/CustomView";
import { Sizes } from "@/constants/Sizes";
import { AppButton } from "@/components/ui/AppButton";

export default function TabTwo(props: SceneRendererProps) {
  const data = useWatch({ name: "data", exact: true });
  if (!data) return;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: Sizes.small }}
    >
      <CustomView1 name="Loại" data={data.types} />
      <CustomView1 name="Cách sử dụng" data={data.usage} />
      <CustomView3 name="Trường hợp đặc biệt" data={data.special_cases} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: Sizes.small,
          marginVertical: Sizes.medium,
        }}
      >
        <AppButton
          title="Quay lại"
          style={{ flex: 1 }}
          onPress={() => props.jumpTo("first")}
        />
        <AppButton
          title="Tiếp tục học"
          style={{ flex: 1 }}
          onPress={() => props.jumpTo("three")}
        />
      </View>
    </ScrollView>
  );
}
