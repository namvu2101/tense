import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import React, { useMemo } from "react";
import { Sizes } from "@/constants/Sizes";
import { ThemedText } from "@/components/ThemedText";
import { useAppColor } from "@/hooks/useAppColor";
import Clipboard from "@react-native-clipboard/clipboard";
import { refNoti } from "@/app/_layout";

export default function Message({
  item,
}: {
  item: { role: "user" | "bot"; text: string };
}) {
  const { Colors } = useAppColor();

  const style: TextStyle = useMemo(() => {
    if (item.role === "user") {
      return { alignSelf: "flex-end", backgroundColor: Colors.primary };
    }
    return { alignSelf: "flex-start", backgroundColor: Colors.tint };
  }, [item]);

  const onCopy = () => {
    Clipboard.setString(item.text);
    refNoti.current?.show("Sao chép thành công");
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onLongPress={onCopy}
      style={{ marginVertical: Sizes.tiny }}
    >
      <ThemedText
        type="defaultSemiBold"
        style={[
          {
            padding: Sizes.tiny,
            maxWidth: "80%",
            borderRadius: Sizes.default,
            color: Colors.while,
          },
          style,
        ]}
      >
        {item.text}
      </ThemedText>
    </TouchableOpacity>
  );
}
