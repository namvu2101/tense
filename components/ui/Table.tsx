import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { TWord } from "@/modules/types";
import { Audio } from "expo-av";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

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

  const renderCell = (value: string | JSX.Element) => {
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
        <ThemedText style={{ textAlign: "center", padding: Sizes.wpx(8) }}>
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
        {headers.slice(0, 3).map((header, index) => (
          <View
            key={header}
            style={{
              flex: 1,
              borderTopWidth: 1,
              borderTopColor: Colors.tint,
              borderLeftWidth: index == 0 ? 0.5 : 0,
              borderLeftColor: Colors.tint,
              borderRightColor: Colors.tint,
              borderRightWidth: index == 2 ? 0.5 : 0,
            }}
          >
            {renderCell(
              <ThemedText
                type="defaultSemiBold"
                style={{ textAlign: "center" }}
              >
                {header}
              </ThemedText>
            )}
          </View>
        ))}
      </View>
      <View>
        {data.map((item) => (
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
              {renderCell(
                <TouchableOpacity
                  hitSlop={Sizes.tiny}
                  onPress={() => playAudio(item.audio)}
                >
                  <ThemedText
                    type="defaultSemiBold"
                    style={{
                      textAlign: "center",
                      textDecorationLine: "underline",
                      color: Colors.link,
                    }}
                  >
                    {item.value}
                  </ThemedText>
                </TouchableOpacity>
              )}
            </View>
            {renderCell(item.transcription)}
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
