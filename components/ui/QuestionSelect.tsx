import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { TQuestion } from "@/modules/types";
import React, { useMemo } from "react";
import {
  FieldValues,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Answers } from "./Answer";

type TProps<T extends FieldValues> = {
  data: TQuestion[];
  onClose?: () => void;
  onReset?: () => void;
  start?: boolean;
  isEdit?: boolean;
} & UseControllerProps<T>;

export function QuestionSelect<T extends FieldValues>(props: TProps<T>) {
  const { Colors } = useAppColor();
  const { data, onClose, onReset, start = true, name, isEdit = true } = props;

  const colors = [
    Colors.royalBlue,
    Colors.forestGreen,
    Colors.indigo,
    Colors.charcoalGray,
    Colors.teal,
  ];

  const coloredData = useMemo(() => {
    const result: Array<TQuestion & { color: string }> = [];
    let prevColor: string | null = null;

    for (const item of data) {
      // Lọc ra các màu khác với màu trước
      const availableColors = colors.filter((c) => c !== prevColor);
      // Random trong các màu hợp lệ
      const color =
        availableColors[Math.floor(Math.random() * availableColors.length)];
      result.push({ ...item, color });
      prevColor = color;
    }

    return result;
  }, [data, colors]);

  const getCorrectAnswer = (item: TQuestion) => {
    const correctAnswer = item.options.find(
      (option) => option.id === item.correct_answer
    );
    return correctAnswer?.value ?? "";
  };

  return (
    <View style={{ flex: 1 }}>
      {coloredData.map((item, index) => (
        <View
          key={item.id}
          style={{ justifyContent: "center", marginBottom: Sizes.default }}
        >
          <View
            style={{
              padding: Sizes.small,
              borderWidth: 1,
              borderRadius: Sizes.default,
              backgroundColor: item.color,
              borderColor: Colors.tint,
            }}
          >
            <ThemedText type="defaultSemiBold" style={{ color: Colors.while }}>
              {index + 1}. {item.question}
            </ThemedText>
          </View>
          <Answers
            isEdit={isEdit}
            data={item.options}
            name={`${name}.${item.id}`}
            answer={item.correct_answer}
          />
          {!isEdit && (
            <>
              <ThemedText type="defaultSemiBold" style={{ color: Colors.link }}>
                Đáp án đúng là: {getCorrectAnswer(item)}
              </ThemedText>
              <ThemedText type="defaultSemiBold" style={{ color: Colors.link }}>
                {item.explain ? `Giải thích: ${item.explain}` : ""}
              </ThemedText>
            </>
          )}
        </View>
      ))}
    </View>
  );
}
