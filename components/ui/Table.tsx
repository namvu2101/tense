import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { TWord } from "@/modules/types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { AppIcon } from "./AppIcon";
import { Audio } from "expo-av";

export function Table({
  data,
  title,
}: Readonly<{ data: TWord[]; title?: string }>) {
  const headers = data[0] ? Object.keys(data[0]) : [];
  const { Colors } = useAppColor();

  const playAudio = async (uri?: string) => {
    const { sound } = await Audio.Sound.createAsync({
      uri:
        uri ??
        "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai1/u1.mp3",
    });
    await sound.playAsync();
  };

  const renderCell = (value: string) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRightColor: Colors.tint,
          borderRightWidth: 0.5,
          borderLeftColor: Colors.tint,
          borderLeftWidth: 0.5,
        }}
      >
        <ThemedText
          style={{ textAlign: "center", paddingVertical: Sizes.wpx(4) }}
        >
          {value}
        </ThemedText>
      </View>
    );
  };
  return (
    <View style={{ marginVertical: Sizes.default }}>
      {title && (
        <ThemedText
          type="subtitle"
          style={{ textAlign: "center", marginVertical: Sizes.tiny }}
        >
          {title}
        </ThemedText>
      )}
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: Colors.tint,
        }}
      >
        {headers.map((header, index) => (
          <View
            key={header}
            style={{
              flex: 1,
              borderTopWidth: 1,
              borderTopColor: Colors.tint,
              borderLeftWidth: index == 0 ? 0.5 : 0,
              borderLeftColor: Colors.tint,
              borderRightColor: Colors.tint,
              borderRightWidth: index == 3 ? 0.5 : 0,
            }}
          >
            {renderCell(header === "transcription" ? "trans" : header)}
          </View>
        ))}
      </View>
      <View>
        {data.map((item, index) => (
          <View
            key={item.value}
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: Colors.tint,
            }}
          >
            <View
              style={{
                flex: 1,
                borderLeftWidth: 0.5,
                borderLeftColor: Colors.tint,
              }}
            >
              {renderCell(item.value)}
            </View>
            {renderCell(item.transcription)}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRightColor: Colors.tint,
                borderRightWidth: 0.5,
                borderLeftColor: Colors.tint,
                borderLeftWidth: 0.5,
              }}
            >
              <AppIcon
                name="play"
                onPress={() => playAudio(item.audio)}
                size={Sizes.wpx(20)}
                color={Colors.tint}
              />
            </View>
            <View
              style={{
                flex: 1,
                borderRightWidth: 0.5,
                borderRightColor: Colors.tint,
              }}
            >
              {renderCell(item.meaning)}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    paddingRight: 5,
  },
  headerCell: {
    fontWeight: "bold",
  },
});
