import { View, type ViewProps } from "react-native";

import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import { AppIcon } from "./ui/AppIcon";

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
  const { Colors } = useAppColor();
  const renderView = () => {
    return (
      <SafeAreaView
        edges={["top"]}
        style={[
          { backgroundColor: headerBgColor ?? Colors.background, flex: 1 },
        ]}
        {...otherProps}
      >
        <StatusBar style="auto" />
        <View style={[{ flex: 1, backgroundColor: Colors.background }, style]}>
          {headerShow && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: Sizes.smaller,
                backgroundColor: headerBgColor ?? Colors.background,
              }}
            >
              <AppIcon
                type="AntDesign"
                name="arrowleft"
                size={Sizes.wpx(24)}
                color={Colors.tint}
                onPress={() => {
                  router.back();
                }}
              />
              <ThemedText type="subtitle">{headerTitle}</ThemedText>
              <View style={{ width: Sizes.wpx(24) }} />
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
