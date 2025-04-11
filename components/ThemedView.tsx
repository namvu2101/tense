import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { ThemedText } from "./ThemedText";
import { Sizes } from "@/constants/Sizes";
import { AppIcon } from "./ui/AppIcon";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  headerShow?: boolean;
  headerTitle?: string;
  headerBgColor?: string;
  form?: UseFormReturn<any>;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  form,
  headerShow = true,
  headerTitle,
  children,
  headerBgColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  const renderView = () => {
    return (
      <SafeAreaView
        edges={["top"]}
        style={[{ backgroundColor: headerBgColor ?? backgroundColor, flex: 1 }]}
        {...otherProps}
      >
        <StatusBar style="auto" />
        <View style={[{ flex: 1, backgroundColor }, style]}>
          {headerShow && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: Sizes.smaller,
                backgroundColor: headerBgColor ?? backgroundColor,
              }}
            >
              <AppIcon
                type="AntDesign"
                name="arrowleft"
                size={24}
                color={textColor}
                onPress={() => {
                  router.back();
                }}
              />
              <ThemedText type="subtitle">{headerTitle}</ThemedText>
              <View />
            </View>
          )}
          {children}
        </View>
      </SafeAreaView>
    );
  };

  if (form) {
    return <FormProvider {...form}>{renderView()}</FormProvider>;
  }
  return renderView();
}
