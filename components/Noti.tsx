import { View, Text } from "react-native";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Sizes } from "@/constants/Sizes";
import { ThemedText } from "./ThemedText";
import { useAppColor } from "@/hooks/useAppColor";

export type TNoti = {
  show: (text: string) => void;
  hide: () => void;
};

const Noti = forwardRef<TNoti>((_, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");
  const { Colors } = useAppColor();
  
  useImperativeHandle(ref, () => ({
    show(text) {
      setValue(text);
      setIsVisible(true);
    },
    hide() {
      setValue("");
      setIsVisible(false);
    },
  }));

  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    if (isVisible) {
      const timeOut = setTimeout(() => {
        setValue("");
        setIsVisible(false);
      }, 2000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <View
      style={{
        position: "absolute",
        bottom: bottom,
        padding: Sizes.default,
        zIndex: 100,
        width: Sizes.device_width,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.6,
      }}
    >
      <View
        style={{
          padding: Sizes.wpx(7),
          backgroundColor: Colors.success,
          borderRadius: Sizes.wpx(20),
        }}
      >
        <ThemedText
          type="defaultSemiBold"
          style={{ color: Colors.while, textAlign: "center" }}
        >
          {value}
        </ThemedText>
      </View>
    </View>
  );
});

export { Noti };
