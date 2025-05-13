import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { CustomView2, CustomView3 } from "@/components/ui/CustomView";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { useFormContext, useWatch } from "react-hook-form";
import { AppButton } from "@/components/ui/AppButton";
import { SceneRendererProps } from "react-native-tab-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import useGetSign from "../modules/useGetSign";

export default function TabOne(props: SceneRendererProps) {
  const { id } = useLocalSearchParams();
  const { Colors } = useAppColor();
  const { bottom } = useSafeAreaInsets();
  const data = useWatch({ name: "data", exact: true });
  const { data: signs } = useGetSign(id as any);
  if (!data) return;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: Sizes.small, marginBottom: bottom }}
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
      <CustomView2 name="Vị trí trong câu" data={data.position} />
      <CustomView3 name="Dấu hiệu" data={data.signs} />
      <CustomView3 name="Dấu hiệu nhận biết" data={signs?.signs ?? []} />
      {/* <TouchableOpacity
        onPress={() => {
          props.jumpTo("four");
        }}
      >
        <ThemedText
          type="defaultSemiBold"
          style={{
            textDecorationLine: "underline",
            textAlign: "center",
            color: Colors.link,
          }}
        >
          Xem chi tiết về các dấu hiệu
        </ThemedText>
      </TouchableOpacity> */}

      <AppButton
        style={{ marginVertical: Sizes.medium }}
        title="Tiếp tục học"
        onPress={() => props.jumpTo("second")}
      />
    </ScrollView>
  );
}
