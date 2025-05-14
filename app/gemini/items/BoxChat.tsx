import { View, Text, Keyboard } from "react-native";
import React from "react";
import { AppIcon } from "@/components/ui/AppIcon";
import { AppInput } from "@/components/ui/AppInput";
import { Sizes } from "@/constants/Sizes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import useMutationRequest from "../modules/useMutationRequest";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TChatProp } from "..";

export default function BoxChat() {
  const { bottom } = useSafeAreaInsets();
  const { getValues, control, setValue } = useFormContext<TChatProp>();
  const { mutateAsync } = useMutationRequest();
  const { append } = useFieldArray({ control, name: "list" });

  const onRequest = async () => {
    Keyboard.dismiss();
    const value = getValues("value");
    append({ key: new Date().getTime().toString(), role: "user", text: value });
    setValue("value", "");
    const res = await mutateAsync(value);
    if (res?.text) {
      append({
        key: new Date().getTime().toString(),
        role: "bot",
        text: res.text,
      });
    }
  };

  const value = useWatch({ control, name: "value", exact: true });
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: Sizes.default,
        gap: Sizes.default,
        bottom,
        marginTop: bottom,
      }}
    >
      <AppInput
        name="value"
        containerStyle={{ flex: 1 }}
        style={{ borderRadius: Sizes.default }}
      />
      <AppIcon
        disabled={value === ""}
        name={"send"}
        size={20}
        color={Colors.primary}
        onPress={onRequest}
      />
    </View>
  );
}
