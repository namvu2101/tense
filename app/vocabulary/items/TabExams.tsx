import { QuestionCountDown } from "@/components/ui/QuestionCountDown";
import { useAppColor } from "@/hooks/useAppColor";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { SceneRendererProps } from "react-native-tab-view";

export default function TabExams(props: SceneRendererProps) {
  const index = useWatch({ name: "index", exact: true });
  const { getValues } = useFormContext();
  const exams = getValues("exams");

  return (
    <QuestionCountDown
      start={index === 2}
      data={exams}
      onClose={() => props.jumpTo("second")}
    />
  );
}
