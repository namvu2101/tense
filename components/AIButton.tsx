import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import { images } from "@/assets/images";
import { Sizes } from "@/constants/Sizes";
import { router } from "expo-router";
import { useRouteInfo } from "expo-router/build/hooks";
import { AppImage } from "./ui/AppImage";
import { ThemedText } from "./ThemedText";
import { useAppColor } from "@/hooks/useAppColor";

const TIME_TO_SHOW = 60000;
const TIME_TO_HIDE = 10000;

export function AIButton() {
  const { Colors } = useAppColor();
  const route = useRouteInfo();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showTimerRef = useRef<NodeJS.Timeout | number | null>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | number | null>(null);
  const lastPathnameRef = useRef<string | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  const isGemini = route.pathname === "/gemini";
  const currentPath = route.pathname;

  useEffect(() => {
    if (isGemini) return;

    if (lastPathnameRef.current !== currentPath) {
      lastPathnameRef.current = currentPath;
      setShouldRender(false);
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();

      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

      showTimerRef.current = setTimeout(() => {
        if (lastPathnameRef.current === currentPath) {
          setShouldRender(true);
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();

          hideTimerRef.current = setTimeout(() => {
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }).start(() => {
              setShouldRender(false);
            });
          }, TIME_TO_HIDE);
        }
      }, TIME_TO_SHOW);
    }

    return () => {
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [route.pathname]);

  if (isGemini) return null;

  return (
    <View
      style={{
        position: "absolute",
        alignSelf: "flex-end",
        bottom: Sizes.wpx(50),
        right: Sizes.wpx(10),
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      {shouldRender && (
        <Animated.View
          style={{
            opacity: fadeAnim,
            right: -Sizes.default,
            top: -Sizes.default,
            backgroundColor: Colors.tint,
            padding: Sizes.tiny,
            borderRadius: Sizes.small,
          }}
        >
          <View
            style={[
              {
                borderTopWidth: Sizes.small,
                borderRightWidth: Sizes.small,
                bottom: -Sizes.tiny,
                right: Sizes.wpx(4),
                position: "absolute",
                width: 0,
                height: 0,
                backgroundColor: "transparent",
                borderStyle: "solid",
                borderRightColor: "transparent",
                borderLeftWidth: 0,
                borderLeftColor: "transparent",
                transform: [{ rotate: "90deg" }],
              },
              { borderTopColor: Colors.tint },
            ]}
          />
          <ThemedText type="defaultSemiBold" style={{ color: Colors.while }}>
            Bạn cần hỏi gì không?
          </ThemedText>
        </Animated.View>
      )}

      <TouchableOpacity
        style={{
          borderRadius: Sizes.wpx(50),
          opacity: 0.6,
        }}
        onPress={() => router.navigate("/gemini")}
      >
        <AppImage
          source={images.gemini}
          style={{ height: Sizes.wpx(70), width: Sizes.wpx(70) }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
