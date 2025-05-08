import React, { useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Sizes } from "@/constants/Sizes";
import { TQuestionSymbol, TQuestionTense } from "@/modules/types";
import { AppSingleSelected } from "@/components/ui/AppSingleSelected";
import { useForm, useWatch } from "react-hook-form";
import { AppButton } from "@/components/ui/AppButton";
import useGetRandomTests from "./modules/useGetRandomTests";
import { useAppColor } from "@/hooks/useAppColor";

const RenderItem = ({
  data,
  index,
}: {
  data: TQuestionTense;
  index: number;
}) => {
  const { Colors } = useAppColor();
  const isSubmit = useWatch({ name: "isSubmit", exact: true });

  return (
    <View
      style={{
        flexShrink: 1,
        marginBottom: Sizes.default,
        minHeight: Sizes.wpx(100),
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: Colors.tint,
        paddingBottom: Sizes.tiny,
        flex: 1,
      }}
    >
      <ThemedText type="defaultSemiBold">
        {index + 1}. {data.question}
      </ThemedText>
      <AppSingleSelected
        data={data.options}
        name={`questions.${data.id}`}
        rules={{ required: true }}
        isEdit={!isSubmit}
        answer={data.correct_answer}
        explain={data.explain}
      />
    </View>
  );
};
type Form = {
  questions: Record<string, string>;
  score: number;
  isSubmit: boolean;
};

export default function PracticeTense() {
  const refScroll = useRef<ScrollView>(null);
  const methods = useForm<Form>({
    mode: "all",
    defaultValues: { questions: {}, score: 0, isSubmit: false },
  });
  const { data: questions, refetch } = useGetRandomTests();

  return (
    <ThemedView
      form={methods}
      headerTitle={`Số điểm của bạn: ${methods.watch("score")}`}
    >
      <ScrollView
        ref={refScroll}
        contentContainerStyle={{ padding: Sizes.default }}
      >
        {questions?.map((question, index) => (
          <RenderItem key={question.id + index} data={question} index={index} />
        ))}
        <AppButton
          show={!methods.watch("isSubmit")}
          title="Submit"
          onPress={methods.handleSubmit((data) => {
            const answers = data.questions;
            console.log(answers);

            const score = questions?.filter(
              (q) => answers?.[q.id] === q.correct_answer
            );
            if (score) {
              methods.setValue("score", score.length);
            }
            methods.setValue("isSubmit", true);
            refScroll.current?.scrollTo(0);
          })}
        />
        <AppButton
          show={methods.watch("isSubmit")}
          title="Reset"
          onPress={() => {
            refetch();
            methods.reset();
          }}
        />
      </ScrollView>
    </ThemedView>
  );
}
