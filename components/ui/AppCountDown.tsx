import { View, Text } from "react-native";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { AppIcon } from "./AppIcon";
import { AppSlider } from "./AppSlider";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { ThemedText } from "../ThemedText";
import { AppButton } from "./AppButton";
import FastImage from "react-native-fast-image";
import { AppImage } from "./AppImage";
import { images } from "@/assets/images";

export type AppCountDownProps = {
  start?: boolean;
  onClose?: () => void;
  onReset?: () => void;
  explain?: string;
};

const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop
    {...props}
    appearsOnIndex={0}
    disappearsOnIndex={-1}
    pressBehavior="none"
  />
);
export type AppCountDownHandle = {
  reset: () => void;
  stop: () => void;
  stopCount: () => void;
};

const AppCountDown = forwardRef<AppCountDownHandle, AppCountDownProps>(
  (props, ref) => {
    const { start = true, onClose, onReset, explain } = props;
    const { Colors } = useAppColor();
    const [count, setCount] = useState(100);
    const bottomSheetRef = React.useRef<BottomSheetModal>(null);
    const arrImg = [images.sad, images.sad2, images.sad3];
    const randomImg = () => {
      const random = arrImg[Math.floor(Math.random() * arrImg.length)];
      setImage(random);
    };
    const [image, setImage] = useState(
      arrImg[Math.floor(Math.random() * arrImg.length)]
    );

    useImperativeHandle(ref, () => ({
      reset() {
        bottomSheetRef.current?.close();
        setCount(100);
      },
      stop() {
        setCount(-2);
      },
      stopCount() {
        setCount(-1);
      },
    }));

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (start && count > 0) {
        timer = setTimeout(() => {
          setCount((prev) => prev - 1);
        }, 100);
      }
      if (count === 0 || count === -2) {
        bottomSheetRef.current?.present();
      }
      return () => {
        clearTimeout(timer);
      };
    }, [start, count]);

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: Sizes.default,
          alignItems: "center",
          width: "100%",
        }}
      >
        <AppIcon
          name={"close"}
          size={30}
          color={Colors.forestGreen}
          onPress={onClose}
        />
        <AppSlider
          hideThumb
          size={Sizes.tiny}
          thumbColor={Colors.forestGreen}
          defaultValue={count}
          trackColor={Colors.background}
        />
        <AppIcon name={"alarm"} size={30} color={Colors.forestGreen} />
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
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: Sizes.default,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.background,
                borderRadius: Sizes.default,
                marginBottom: Sizes.default,
                justifyContent: "space-around",
                alignItems: "center",
                padding: Sizes.default,
                minHeight: Sizes.wpx(300),
                minWidth: Sizes.wpx(300),
              }}
            >
              <ThemedText type="subtitle" style={{ textAlign: "center" }}>
                {count == 0
                  ? "Hết giờ mất rồi 😭"
                  : "Đáp án không chính xác 😭"}
              </ThemedText>
              <AppImage
                source={image}
                style={{ height: Sizes.wpx(150), width: Sizes.wpx(150) }}
                resizeMode="contain"
              />
              {count == -2 && explain && (
                <ThemedText
                  type="defaultSemiBold"
                  style={{ color: Colors.link }}
                >
                  Giải thích: {explain}
                </ThemedText>
              )}
              <AppButton
                title="Thử lại"
                onPress={() => {
                  randomImg();
                  onReset?.();
                  bottomSheetRef.current?.close();
                  setCount(100);
                }}
              />
            </View>
          </View>
        </BottomSheetModal>
      </View>
    );
  }
);
export { AppCountDown };
