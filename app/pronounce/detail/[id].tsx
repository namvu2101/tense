import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AppIcon } from "@/components/ui/AppIcon";
import { Table } from "@/components/ui/Table";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { consonants, vowels } from "@/modules";
import { Audio } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
export default function DetailItem() {
  const { id } = useLocalSearchParams();
  const { Colors } = useAppColor();
  const ipaData = vowels.concat(consonants);
  const findedItem = ipaData.find((item) => item.symbol === id);
  const {
    symbol,
    keyword,
    description,
    articulation,
    audio,
    examples,
    exceptions,
    identify,
  } = findedItem!;

  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri:
        audio ??
        "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai1/u1.mp3",
    });
    await sound.playAsync();
  };
  const dataIdentify = Object.keys(identify).join(", ");

  return (
    <ThemedView headerTitle={`Cách phát âm: ${id}`}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: Sizes.default }}
      >
        <ThemedText
          type="huge"
          style={{ textAlign: "center", marginVertical: Sizes.huge }}
        >
          {symbol}
        </ThemedText>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: Colors.primary,
            padding: Sizes.smaller,
            borderRadius: Sizes.border_radius,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginBottom: Sizes.big,
            gap: Sizes.tiny,
          }}
          onPress={playAudio}
        >
          <AppIcon name="volume-high-outline" size={24} color="#fff" />
          <ThemedText type="defaultSemiBold">Phát âm</ThemedText>
        </TouchableOpacity>

        <ThemedText style={{ textAlign: "center" }}>
          Ví dụ: <ThemedText type="defaultSemiBold">{keyword}</ThemedText>
        </ThemedText>

        <ThemedText type="subtitle" style={{ marginVertical: Sizes.smaller }}>
          Mô tả:
        </ThemedText>
        <ThemedText type="defaultSemiBold">{description}</ThemedText>

        <ThemedText type="subtitle" style={{ marginVertical: Sizes.smaller }}>
          Cách phát âm:
        </ThemedText>
        <ThemedText type="defaultSemiBold">{articulation}</ThemedText>

        <ThemedText type="subtitle" style={{ marginVertical: Sizes.smaller }}>
          Dấu hiệu:{" "}
          <ThemedText type="defaultSemiBold">{dataIdentify}</ThemedText>
        </ThemedText>

        {/* <ThemedText type="subtitle" style={{ marginVertical: Sizes.smaller }}>
          Ví dụ từ:
        </ThemedText>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: Sizes.tiny,
          }}
        >
          {examples.map((example) => (
            <View
              key={example.value}
              style={{
                borderRadius: Sizes.border_radius,
                borderWidth: 2,
                paddingVertical: Sizes.wpx(4),
                paddingHorizontal: Sizes.wpx(8),
                borderColor: Colors.tint,
                backgroundColor: Colors.background,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ThemedText type="defaultSemiBold">{example.value}</ThemedText>
            </View>
          ))}
        </View> */}
        <Table data={examples} title="Ví dụ" />
        {Object.keys(identify).map((key) => {
          return (
            <View key={key}>
              <ThemedText
                type="subtitle"
                style={{ marginVertical: Sizes.smaller }}
              >
                {`Ví dụ về ${key}:`}
              </ThemedText>
              <Table data={identify[key]} />
            </View>
          );
        })}
        <Table data={exceptions} title="Ngoại lệ" />
      </ScrollView>
    </ThemedView>
  );
}
