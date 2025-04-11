import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Styles } from "@/constants/Commons";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { Link, router } from "expo-router";
import { consonants, vowels } from "@/modules";

export default function Index() {
  const { Colors } = useAppColor();
  const dataVowels = [
    {
      title: "Nguyên âm ngắn",
      data: vowels.filter((item) => item.type === "short vowel"),
    },
    {
      title: "Nguyên âm dài",
      data: vowels.filter((item) => item.type === "long vowel"),
    },
    {
      title: "Nguyên âm đôi",
      data: vowels.filter((item) => item.type === "diphthong"),
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
                      padding: Sizes.smaller,
                      borderRadius: Sizes.smaller,
                      marginBottom: Sizes.smaller,
                      width: Sizes.wpx(50),
                      height: Sizes.wpx(50),
                      borderWidth: 2,
                      borderColor: Colors.tint,
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    Styles.shadow,
                  ]}
                >
                  <ThemedText type="default">{ipa.symbol}</ThemedText>
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
          {consonants.map((item, index) => (
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
                  padding: Sizes.smaller,
                  borderRadius: Sizes.smaller,
                  marginBottom: Sizes.smaller,
                  width: Sizes.wpx(50),
                  height: Sizes.wpx(50),
                  borderWidth: 2,
                  borderColor: Colors.tint,
                  alignItems: "center",
                  justifyContent: "center",
                },
                Styles.shadow,
              ]}
            >
              <ThemedText type="default">{item.symbol}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({});
