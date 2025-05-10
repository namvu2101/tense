import React from "react";
import { ScrollView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { AppCollapsible } from "@/components/ui/AppCollapsible";
import { AppIcon } from "@/components/ui/AppIcon";
import { Sizes } from "@/constants/Sizes";
import { TenseData } from "@/modules/types";
import { useAppColor } from "@/hooks/useAppColor";
import { WorkSuggest } from "@/components/ui/WorkSuggest";
import { CustomView3 } from "@/components/ui/CustomView";

export function Tab({ data }: Readonly<{ data: TenseData }>) {
  const { Colors } = useAppColor();
  const { description, note, usage } = data;
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: Sizes.default,
        gap: Sizes.default,
        overflow: "hidden",
      }}
    >
      <ThemedText type="subtitle">{description}</ThemedText>
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
          style={{ textAlign: "center", color: Colors.forestGreen }}
        >
          {usage.definition}
        </ThemedText>
      </View>
      <ThemedText type="defaultSemiBold" style={{ marginTop: 10 }}>
        Từ khóa nhận biết:
      </ThemedText>
      <WorkSuggest data={usage.signalWords} type="defaultSemiBold" />
      <CustomView3 name="Ví dụ" data={usage.examples} />

      <View
        style={{
          backgroundColor: Colors.background,
          borderRadius: Sizes.border_radius * 2,
          overflow: "hidden",
          marginTop: Sizes.medium,
        }}
      >
        {note && <CustomView3 name="Lưu ý quan trọng" data={note} />}
      </View>
    </ScrollView>
  );
}
