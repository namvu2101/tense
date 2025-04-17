import React from "react";
import { ScrollView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Sizes } from "@/constants/Sizes";
import { questions } from "@/modules/questions";
import { TQuestionSymbol } from "@/modules/types";
import { AppSingleSelected } from "@/components/ui/AppSingleSelected";

const RenderItem = ({
  data,
  index,
}: {
  data: TQuestionSymbol;
  index: number;
}) => {
  return (
    <View
      style={{
        flexShrink: 1,
        marginBottom: Sizes.default,
        justifyContent: "space-between",
        minHeight: Sizes.wpx(100),
      }}
    >
      <ThemedText type="defaultSemiBold">
        {index + 1}. {data.question}
      </ThemedText>
      <AppSingleSelected data={data.options} />
    </View>
  );
};

export default function Tests() {
  return (
    <ThemedView>
      <ScrollView contentContainerStyle={{ padding: Sizes.default }}>
        {questions.map((question, index) => (
          <RenderItem
            key={question.symbol + index}
            data={question}
            index={index}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
}
