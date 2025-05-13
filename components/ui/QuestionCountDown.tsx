import React, { useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { images } from "@/assets/images";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { TQuestion } from "@/modules/types";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { ThemedText } from "../ThemedText";
import { Answers } from "./Answer";
import { AppButton } from "./AppButton";
import { AppCountDown, AppCountDownHandle } from "./AppCountDown";
import { AppImage } from "./AppImage";
import { router } from "expo-router";

type TProps = {
  data: TQuestion[];
  onClose?: () => void;
  onReset?: () => void;
  start?: boolean;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop
    {...props}
    appearsOnIndex={0}
    disappearsOnIndex={-1}
    pressBehavior="none"
  />
);
export function QuestionCountDown(props: TProps) {
  const { Colors } = useAppColor();
  const { data, onClose, onReset, start = true } = props;
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const ref = useRef<AppCountDownHandle>(null);
  const randomQ = data[Math.floor(Math.random() * data.length)];
  const [indexs, setIndexs] = useState([randomQ.id]);
  const [question, setQuestion] = useState(randomQ);
  const getRandom = () => {
    const unusedQuestions = data.filter((item) => !indexs.includes(item.id));
    if (unusedQuestions.length === 0) return; // all used
    const randomQ =
      unusedQuestions[Math.floor(Math.random() * unusedQuestions.length)];
    setQuestion(randomQ);
    setIndexs((prev) => [...prev, randomQ.id]);
  };
  const ramdomImg = useMemo(() => {
    const arrImg = [images.happy, images.happy2];
    const random = arrImg[Math.floor(Math.random() * arrImg.length)];
    return random;
  }, [question]);

  const onResetPress = () => {
    setIndexs([]);
    getRandom();
  };
  const onClosePress = () => {
    onClose?.();
    onResetPress();
  };
  return (
    <View style={{ flex: 1 }}>
      <ThemedText
        type="title"
        style={{ width: "100%", textAlign: "center" }}
      >{`Score: ${indexs.length > 0 ? indexs.length - 1 : 0}`}</ThemedText>
      <AppCountDown
        ref={ref}
        start={start}
        onClose={onClosePress}
        onReset={onResetPress}
        explain={question.explain}
      />
      <View style={{ padding: Sizes.default, justifyContent: "center" }}>
        <View
          style={{
            padding: Sizes.small,
            borderWidth: 1,
            borderRadius: Sizes.default,
            backgroundColor: Colors.info,
            borderColor: Colors.tint,
          }}
        >
          {question && (
            <ThemedText type="defaultSemiBold" style={{ color: Colors.while }}>
              {question.question}
            </ThemedText>
          )}
        </View>
        <Answers
          data={question.options}
          onPress={(answer) => {
            if (answer.id === question.correct_answer) {
              bottomSheetRef.current?.present();
              ref.current?.stopCount();
            } else {
              ref.current?.stop();
            }
          }}
        />
      </View>
      <BottomSheetModal
        snapPoints={["100%"]}
        ref={bottomSheetRef}
        index={0}
        stackBehavior="push"
        backdropComponent={renderBackdrop}
        backgroundComponent={() => null}
        backgroundStyle={{ backgroundColor: null as any }}
        handleComponent={() => null}
        enablePanDownToClose={false}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: Colors.background,
              borderRadius: Sizes.default,
              marginBottom: Sizes.default,
              justifyContent: "space-between",
              alignItems: "center",
              padding: Sizes.small,
              minHeight: Sizes.wpx(300),
              minWidth: Sizes.wpx(300),
            }}
          >
            <ThemedText type="subtitle" style={{ textAlign: "center" }}>
              {data.length === indexs.length + 1
                ? "Bạn đã trả lời hết câu hỏi 😗"
                : "Tuyệt vời 😁"}
            </ThemedText>
            <AppImage
              source={ramdomImg}
              style={{ height: Sizes.wpx(150), width: Sizes.wpx(150) }}
              resizeMode="contain"
            />
            <AppButton
              title="Tiếp tục"
              onPress={() => {
                if (data.length === indexs.length + 1) {
                  return router.back();
                }
                getRandom();
                ref.current?.reset();
                bottomSheetRef.current?.close();
              }}
            />
          </View>
        </View>
      </BottomSheetModal>
    </View>
  );
}
