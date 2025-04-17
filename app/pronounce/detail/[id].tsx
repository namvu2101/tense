import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AppIcon } from "@/components/ui/AppIcon";
import { AppVideo } from "@/components/ui/AppVideo";
import { Table } from "@/components/ui/Table";
import { Styles } from "@/constants/Commons";
import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { consonants, vowels } from "@/modules";
import { ipaData } from "@/modules/ipa";
import { Audio } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
export default function DetailItem() {
  const { id } = useLocalSearchParams();
  const { Colors } = useAppColor();
  const data = vowels.concat(consonants);
  const convertData = data.map((item) => {
    const findedItem = ipaData.find((i) => i.ipa_symbol === id);

    if (findedItem) {
      return {
        ...item,
        examples: findedItem.examples,
        video_url: findedItem.video_url,
      };
    }
    return { ...item, examples: [] };
  });

  const findedItem = convertData.find((item) => item.symbol === id);

  const {
    symbol,
    keyword,
    description,
    articulation,
    audio,
    examples,
    identify,
    video_url,
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
        <View
          style={[
            {
              marginVertical: Sizes.default,
              borderRadius: Sizes.default,
              padding: Sizes.wpx(4),
              alignSelf: "center",
            },
            Styles.shadow,
          ]}
        >
          <View
            style={{
              backgroundColor: Colors.background,
              height: Sizes.wpx(130),
              width: Sizes.wpx(130),
              borderRadius: Sizes.default,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThemedText type="huge">{symbol}</ThemedText>
          </View>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: Colors.link,
            padding: Sizes.smaller,
            borderRadius: Sizes.border_radius,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: Sizes.big,
            alignSelf: "center",
            gap: Sizes.tiny,
          }}
          onPress={playAudio}
        >
          <AppIcon
            name="volume-high-outline"
            size={24}
            color={Colors.background}
          />
          <ThemedText
            type="defaultSemiBold"
            style={{ color: Colors.background }}
          >
            Phát âm
          </ThemedText>
        </TouchableOpacity>
        <AppVideo url={video_url!} />
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

        {examples.map((example, index) => (
          <Table
            key={example.title + index}
            data={example.examples}
            title={example.title}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
}
