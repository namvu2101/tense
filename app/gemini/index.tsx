import { ThemedView } from "@/components/ThemedView";
import { Convert } from "@/constants/Convert";
import { TDataRendering } from "@/constants/type";
import React from "react";
import { useForm } from "react-hook-form";
import BoxChat from "./items/BoxChat";
import ListChat from "./items/ListChat";
import { Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { Sizes } from "@/constants/Sizes";

export type TChatProp = {
  list: { key: string; role: "user" | "bot"; text: string }[];
  value: string;
};

export default function Gemini() {
  const method = useForm<TChatProp>({
    mode: "onSubmit",
    defaultValues: {
      value: "",
      list: [{ key: "1234", role: "bot", text: "Tôi có thể giúp gì không ?" }],
    },
  });

  const dataRender: TDataRendering = [
    {
      id: ListChat.name,
      component: ListChat,
    },

    {
      id: BoxChat.name,
      component: BoxChat,
    },
  ];
  return (
    <ThemedView form={method} headerTitle="ChatBot" style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? Sizes.wpx(20) : 0}
      >
        {dataRender.map((item) => {
          const Component = item.component;
          const childItem = Convert.dataRenderingChildren({ item });
          return (
            <Component key={item.id} {...item.config}>
              {childItem}
            </Component>
          );
        })}
      </KeyboardAvoidingView>
    </ThemedView>
  );
}
