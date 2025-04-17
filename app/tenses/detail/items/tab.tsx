import React from "react";
import { ScrollView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { AppCollapsible } from "@/components/ui/AppCollapsible";
import { AppIcon } from "@/components/ui/AppIcon";
import { Sizes } from "@/constants/Sizes";
import { TenseData } from "@/modules/types";
import { useAppColor } from "@/hooks/useAppColor";

export function Tab({ data }: Readonly<{ data: TenseData }>) {
  const { Colors } = useAppColor();
  const { description, note, usage } = data;
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: Sizes.default,
        gap: Sizes.default,
        overflow: "hidden",
      }}
    >
      <ThemedText type="subtitle">{description}</ThemedText>

      <AppCollapsible
        isHide={false}
        title={
          <View
            style={{
              flexDirection: "row",
              gap: Sizes.wpx(5),
              alignItems: "center",
            }}
          >
            <AppIcon
              name="information-circle-sharp"
              color={Colors.background}
              size={Sizes.wpx(25)}
            />
            <ThemedText
              type="subtitle"
              style={{
                textDecorationLine: "underline",
                color: Colors.background,
              }}
            >
              Cách dùng
            </ThemedText>
          </View>
        }
      >
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: Colors.tint,
            padding: Sizes.tiny,
          }}
        >
          <View
            style={{
              padding: Sizes.small,
              borderWidth: 1,
              borderRadius: Sizes.border_radius,
              borderColor: Colors.icon,
              marginVertical: Sizes.small,
            }}
          >
            <ThemedText type="defaultSemiBold">{usage.definition}</ThemedText>
          </View>

          <View>
            <ThemedText type="defaultSemiBold" style={{ marginTop: 10 }}>
              Ví dụ:
            </ThemedText>
            {usage.examples.map((item) => (
              <ThemedText key={item} type="default">
                {item}
              </ThemedText>
            ))}
          </View>

          <View>
            <ThemedText type="defaultSemiBold" style={{ marginTop: 10 }}>
              Từ khóa nhận biết:
            </ThemedText>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 10,
                marginVertical: Sizes.tiny,
              }}
            >
              {usage.signalWords.map((item) => (
                <ThemedText
                  key={item}
                  type="defaultSemiBold"
                  style={{
                    padding: Sizes.tiny,
                    backgroundColor: Colors.tint,
                    color: Colors.background,
                    borderRadius: Sizes.big,
                  }}
                >
                  {item}
                </ThemedText>
              ))}
            </View>
          </View>
        </View>
      </AppCollapsible>

      <View
        style={{
          backgroundColor: Colors.background,
          borderRadius: Sizes.border_radius * 2,
          overflow: "hidden",
          marginTop: Sizes.medium,
        }}
      >
        {note && (
          <View
            style={{
              width: "100%",
              backgroundColor: Colors.tint,
              borderWidth: 1,
              borderColor: Colors.tint,
            }}
          >
            <ThemedText
              type="subtitle"
              style={{ color: Colors.background, padding: Sizes.small }}
            >
              Lưu ý quan trọng
            </ThemedText>
            <View
              style={{
                backgroundColor: Colors.background,
                padding: Sizes.tiny,
              }}
            >
              {note.map((item) => (
                <ThemedText
                  key={item}
                  type="default"
                  style={{ textAlignVertical: "center" }}
                >
                  - {item}
                </ThemedText>
              ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
