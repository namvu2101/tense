import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import React, { LegacyRef, ReactNode, useState } from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import {
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { AppIcon, TypeIconName } from "./AppIcon";

export type AppInputTextProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextInputProps, "style" | "defaultValue"> & {
    label?: string;
    labelIcon?: TypeIconName;
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    inputStyle?: TextStyle;
    renderRight?: () => JSX.Element;
    renderLeft?: () => JSX.Element;
    placeholder?: string;
    disable?: boolean;
    textStyle?: TextStyle;
    suggestItemStyle?: ViewStyle;
    modalSuggestButtonStyle?: ViewStyle;
    inputRef?: LegacyRef<TextInput>;
    modalSuggest?: string[];
    removable?: boolean;
    isInBottomSheet?: boolean;
    multiText?: boolean;
    onPressIcon?: () => void;
    renderLabelRight?: () => JSX.Element;
  };

export function AppInput<T extends FieldValues>({
  control,
  name,
  label,
  defaultValue,
  rules,
  secureTextEntry,
  containerStyle,
  textStyle,
  style,
  placeholder,
  disable,
  suggestItemStyle,
  renderRight,
  renderLeft,
  modalSuggest,
  modalSuggestButtonStyle,
  inputRef,
  removable = false,
  isInBottomSheet = false,
  multiText = false,
  onPressIcon,
  renderLabelRight,
  labelIcon,
  ...textInputProps
}: AppInputTextProps<T>): JSX.Element {
  const { Colors } = useAppColor();

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name, rules, defaultValue });
  const [secure, setSecure] = useState(secureTextEntry);
  const renderSecure = () => {
    if (!secureTextEntry) {
      return null;
    }
    let icon = "eye";
    if (!secure) {
      icon = "eye-off";
    }
    return (
      <AppIcon
        hitSlop={1}
        onPress={() => {
          setSecure(!secure);
        }}
        name={icon as TypeIconName}
        type={"Feather"}
        style={{
          paddingRight: Sizes.smaller,
        }}
        size={Sizes.large}
        color={Colors.text}
      />
    );
  };
  let borderColor = Colors.tint;
  if (error?.message) {
    borderColor = "red";
  }
  const renderLabel = () => {
    if (!label) {
      return null;
    }
    let required: ReactNode = "";
    if (rules?.required) {
      required = (
        <ThemedText
          style={{
            color: Colors.tint,
            fontSize: Sizes.wpx(16),
            fontWeight: "400",
          }}
        >
          {"*"}
        </ThemedText>
      );
    }
    return (
      <View
        style={{
          paddingBottom: Sizes.smaller,
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <ThemedText
          style={{
            fontSize: Sizes.normal,
            lineHeight: Sizes.normal * 1.2,
            fontWeight: "700",
          }}
        >
          {label} {required}
        </ThemedText>
        {!!labelIcon && (
          <View style={{ marginLeft: Sizes.wpx(10) }}>
            <AppIcon name={labelIcon} onPress={onPressIcon} />
          </View>
        )}
        {renderLabelRight?.()}
      </View>
    );
  };
  const renderButtonClear = () => {
    if (value !== "" && removable) {
      return (
        <View
          style={{
            backgroundColor: Colors.text,
            borderRadius: Sizes.large,
            marginRight: Sizes.tiny,
          }}
        >
          <AppIcon
            name="close"
            onPress={() => onChange("")}
            size={20}
            color={Colors.background}
            type="Ionicons"
          />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={containerStyle}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {renderLabel()}
      </View>
      <View
        style={[
          {
            width: "100%",
            flexDirection: "row",
            borderWidth: Sizes.border,
            borderRadius: Sizes.border_radius,
            alignItems: "center",
            height: Sizes.input_height,
          },
          style,
          { borderColor },
        ]}
      >
        {renderLeft?.()}
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          autoCapitalize={"none"}
          onChangeText={onChange}
          editable={!disable}
          value={value}
          autoCorrect={false}
          spellCheck={false}
          style={[
            {
              color: Colors.text,
              fontSize: Sizes.wpx(16),
              flex: 1,
              lineHeight: Sizes.wpx(20),
              paddingHorizontal: Sizes.smaller,
              borderRadius: Sizes.border_radius,
            },
            textStyle,
          ]}
          placeholderTextColor={Colors.tint}
          secureTextEntry={secure}
          {...textInputProps}
        />
        {renderSecure()}
        {renderRight?.()}
        {renderButtonClear()}
      </View>
      {error?.message && (
        <ThemedText
          style={{
            color: Colors.text,
            paddingTop: Sizes.tiny,
            fontSize: Sizes.small,
          }}
        >
          {error?.message}
        </ThemedText>
      )}
    </View>
  );
}
