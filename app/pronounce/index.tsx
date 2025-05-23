import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Styles } from "@/constants/Commons";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { router } from "expo-router";
import { useGetSymbol } from "./modules/useGetSymbol";

export default function Index() {
  const { Colors } = useAppColor();
  const { data } = useGetSymbol();

  const dataVowels = [
    {
      title: "Nguyên âm ngắn",
      data: data?.vowels.filter((item) => item.type === "short vowel") ?? [],
    },
    {
      title: "Nguyên âm dài",
      data: data?.vowels.filter((item) => item.type === "long vowel") ?? [],
    },
    {
      title: "Nguyên âm đôi",
      data: data?.vowels.filter((item) => item.type === "diphthong") ?? [],
    },
  ];

  return (
    <ThemedView>
      <ScrollView contentContainerStyle={{ padding: Sizes.default }}>
        <ThemedText
          type="title"
          style={{
            marginBottom: Sizes.default,
            textAlign: "center",
            lineHeight: 40,
          }}
        >
          Nguyên Âm
        </ThemedText>
        {dataVowels.map((item, index) => (
          <View key={item.title + index}>
            <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: Sizes.default,
                marginTop: Sizes.smaller,
              }}
            >
              {item.data.map((ipa, index) => (
                <TouchableOpacity
                  onPress={() => {
                    router.push({
                      pathname: "/pronounce/detail/[id]",
                      params: { id: ipa.symbol },
                    });
                  }}
                  key={ipa.symbol + index}
                  style={[
                    {
                      backgroundColor: Colors.background,
                      borderRadius: Sizes.smaller,
                      marginBottom: Sizes.smaller,
                      padding: 5,
                    },
                    Styles.shadow,
                  ]}
                >
                  <View
                    style={{
                      borderWidth: 0.5,
                      width: Sizes.wpx(55),
                      height: Sizes.wpx(55),
                      padding: Sizes.smaller,
                      borderColor: Colors.tint,
                      borderRadius: Sizes.smaller,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ThemedText type="defaultSemiBold">
                      {ipa.symbol.replace(/\//g, "")}
                    </ThemedText>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        <ThemedText
          type="title"
          style={{
            marginVertical: Sizes.default,
            textAlign: "center",
            lineHeight: 40,
          }}
        >
          Phụ Âm
        </ThemedText>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: Sizes.default,
            marginTop: Sizes.smaller,
          }}
        >
          {data?.consonants.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                router.push({
                  pathname: "/pronounce/detail/[id]",
                  params: { id: item.symbol },
                });
              }}
              key={item.symbol + index}
              style={[
                {
                  backgroundColor: Colors.background,
                  borderRadius: Sizes.smaller,
                  marginBottom: Sizes.smaller,
                  padding: 5,
                },
                Styles.shadow,
              ]}
            >
              <View
                style={{
                  borderWidth: 0.5,
                  width: Sizes.wpx(55),
                  height: Sizes.wpx(55),
                  padding: Sizes.smaller,
                  borderColor: Colors.tint,
                  borderRadius: Sizes.smaller,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ThemedText type="defaultSemiBold">
                  {item.symbol.replace(/\//g, "")}
                </ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({});
