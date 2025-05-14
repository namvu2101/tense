import { AppViewLoading } from "@/components/ui/AppLoading";
import { Sizes } from "@/constants/Sizes";
import { useIsMutating } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { FlatList, Keyboard, ScrollView } from "react-native";
import { TChatProp } from "..";
import { onScrollToEnd, refList } from "../modules/useRefList";
import Message from "./Message";

export default function ListChat() {
  const isMutatingPosts = useIsMutating({ mutationKey: ["mutation-ai"] });
  const { control } = useFormContext<TChatProp>();
  const list = useWatch({ control, name: "list", exact: true });
  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () => {
      setTimeout(() => {
        if (refList.current) {
          onScrollToEnd();
        } else {
          console.log("refList.current chưa sẵn sàng");
        }
      }, 100);
    });

    return () => {
      showSub.remove();
    };
  }, []);

  useEffect(() => {
    if (list.length > 1) {
      onScrollToEnd();
    }
  }, [list.length]);

  const renderFooter = () => {
    if (isMutatingPosts === 1) {
      return <AppViewLoading />;
    }
    return null;
  };
  return (
    <ScrollView
      ref={refList}
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: Sizes.small }}
    >
      {list.map((item) => (
        <Message key={item.key} item={item} />
      ))}
      {renderFooter()}
    </ScrollView>
  );
}
