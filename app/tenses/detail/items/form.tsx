import React from "react";
import { ScrollView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { AppCollapsible } from "@/components/ui/AppCollapsible";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { TenseForm, TenseStructure } from "@/modules/types";
import { WordSuggest } from "@/components/ui/WordSuggest";

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
          borderRadius: Sizes.border_radius * 2,
          marginTop: -10,
        }}
      >
        <View
          style={{
            padding: Sizes.small,
            borderRadius: Sizes.big,
            backgroundColor: Colors.hightLight,
            borderColor: Colors.tint,
            borderWidth: 1,
            marginTop:Sizes.default
          }}
        >
          <ThemedText type="default" style={{ color: Colors.royalBlue }}>
            {data?.formula}
          </ThemedText>
        </View>
        <View>
          <ThemedText type="defaultSemiBold" style={{ marginTop: 10 }}>
            Ví dụ:
          </ThemedText>
          <WordSuggest data={data.examples} />
        </View>

        {data?.note && (
          <View
            style={{
              padding: Sizes.small,
              borderRadius: Sizes.big,
              backgroundColor: Colors.note,
              borderColor: Colors.tint,
              borderWidth: 1,
            }}
          >
            <ThemedText
              type="default"
              style={{ textAlign: "center", color: Colors.forestGreen }}
            >
              {data?.note}
            </ThemedText>
          </View>
        )}

        {data?.details && (
          <View
            style={{
              padding: Sizes.small,
              borderRadius: Sizes.big,
              backgroundColor: Colors.info,
              borderColor: Colors.tint,
              borderWidth: 1,
              marginVertical: Sizes.default,
            }}
          >
            <ThemedText
              type="default"
              style={{ textAlign: "center", color: Colors.while }}
            >
              {data?.details}
            </ThemedText>
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
        paddingBottom: Sizes.default,
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
