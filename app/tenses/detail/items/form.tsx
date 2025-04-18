import React from "react";
import { ScrollView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { AppCollapsible } from "@/components/ui/AppCollapsible";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { TenseForm, TenseStructure } from "@/modules/types";

export type TFormProps = {
  data: TenseForm;
};

const RenderChildren = ({
  title,
  data,
}: {
  title: string;
  data: TenseStructure;
}) => {
  const { Colors } = useAppColor();
  return (
    <AppCollapsible isHide={false} title={title}>
      <View
        style={{
          borderWidth: 1,
          borderColor: Colors.tint,
          padding: Sizes.tiny,
        }}
      >
        <View
          style={{
            padding: Sizes.small,
            borderWidth: 1,
            borderRadius: Sizes.border_radius,
            borderColor: Colors.icon,
            marginVertical: Sizes.small,
          }}
        >
          <ThemedText type="defaultSemiBold">{data?.formula}</ThemedText>
        </View>

        <View>
          <ThemedText type="defaultSemiBold" style={{ marginTop: 10 }}>
            Ví dụ:
          </ThemedText>
          {data?.examples.map((item) => (
            <ThemedText
              key={item}
              type="default"
              style={{ marginVertical: Sizes.tiny }}
            >
              {item}
            </ThemedText>
          ))}
        </View>

        {data?.note && (
          <View
            style={{
              padding: Sizes.small,
              borderWidth: 1,
              borderRadius: Sizes.border_radius,
              borderColor: Colors.icon,
              marginVertical: Sizes.small,
            }}
          >
            <ThemedText type="defaultSemiBold">{data?.note}</ThemedText>
          </View>
        )}

        {data?.details && (
          <View
            style={{
              padding: Sizes.small,
              borderWidth: 1,
              borderRadius: Sizes.border_radius,
              borderColor: Colors.icon,
              marginVertical: Sizes.small,
            }}
          >
            <ThemedText type="defaultSemiBold">{data?.details}</ThemedText>
          </View>
        )}
      </View>
    </AppCollapsible>
  );
};

export function Form({ data }: Readonly<{ data: TenseForm | TenseStructure }>) {
  const { tobe, normal } = data as TenseForm;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        width: Sizes.device_width,
        paddingHorizontal: Sizes.default,
      }}
    >
      {!tobe && !normal && (
        <RenderChildren
          title="Cấu trúc của thì"
          data={data as TenseStructure}
        />
      )}
      {tobe && <RenderChildren title="Với động từ 'to be'" data={tobe} />}
      {normal && <RenderChildren title="Với động từ thường" data={normal} />}
    </ScrollView>
  );
}
