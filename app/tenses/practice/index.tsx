import React, { useRef } from "react";
import { ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { AppButton } from "@/components/ui/AppButton";
import { QuestionSelect } from "@/components/ui/QuestionSelect";
import { Sizes } from "@/constants/Sizes";
import { useForm } from "react-hook-form";
import useGetRandomTests from "./modules/useGetRandomTests";

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
        <QuestionSelect
          data={questions ?? []}
          name="questions"
          isEdit={!methods.watch("isSubmit")}
        />
        <AppButton
          show={!methods.watch("isSubmit")}
          title="Submit"
          onPress={methods.handleSubmit((data) => {
            const answers = data.questions;
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
            refScroll.current?.scrollTo(0);
          }}
        />
      </ScrollView>
    </ThemedView>
  );
}
