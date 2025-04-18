import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { TOptionsSymbol } from "@/modules/types";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type TAppSingleSelected<T extends FieldValues> = {
  data: TOptionsSymbol[];
  size?: number;
  isEdit?: boolean;
  answer?: string;
} & UseControllerProps<T>;

const WordDisplay = ({ word }: { word: TOptionsSymbol }) => {
  const { value, underline } = word;
  if (!underline) {
    return <ThemedText>{value}</ThemedText>;
  }
  const startIndex = value.indexOf(underline);
  if (startIndex === -1) return <ThemedText>{value}</ThemedText>; // fallback nếu không tìm thấy

  const before = value.slice(0, startIndex);
  const underlined = value.slice(startIndex, startIndex + underline.length);
  const after = value.slice(startIndex + underline.length);

  return (
    <ThemedText>
      {before}
      <ThemedText style={{ textDecorationLine: "underline" }}>
        {underlined}
      </ThemedText>
      {after}
    </ThemedText>
  );
};

export function AppSingleSelected<T extends FieldValues>(
  props: Readonly<TAppSingleSelected<T>>
) {
  const {
    data = [],
    size = Sizes.wpx(20),
    name,
    control,
    rules,
    isEdit = true,
    answer,
  } = props;
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules });

  const { Colors } = useAppColor();
  const onPress = (value: string) => {
    if (!isEdit) {
      return;
    }
    onChange(value);
  };

  return (
    <View>
      {error && (
        <ThemedText style={{ color: "red" }}>Bạn chưa chọn đáp án</ThemedText>
      )}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.map((option) => (
          <TouchableOpacity
            activeOpacity={isEdit ? 0 : 1}
            onPress={() => onPress(option.value)}
            key={option.value}
            style={{
              flexDirection: "row",
              gap: Sizes.wpx(4),
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: size,
                width: size,
                borderRadius: size / 2,
                borderColor: Colors.tint,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.background,
              }}
            >
              {!isEdit && value !== answer && option.value === answer && (
                <View
                  style={{
                    position: "absolute",
                    height: size - 10,
                    width: size - 10,
                    borderRadius: size / 2,
                    backgroundColor: Colors.link,
                  }}
                />
              )}
              <View
                style={{
                  height: size - 10,
                  width: size - 10,
                  borderRadius: size / 2,
                  backgroundColor:
                    value === option.value ? Colors.tint : undefined,
                }}
              />
            </View>
            <WordDisplay word={option} />
          </TouchableOpacity>
        ))}
      </View>
      {!isEdit && (
        <ThemedText type="defaultSemiBold" style={{ color: Colors.link }}>
          Đáp án đúng là: {answer}
        </ThemedText>
      )}
    </View>
  );
}
