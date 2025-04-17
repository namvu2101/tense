import { Sizes } from "@/constants/Sizes";
import { useVideoPlayer, VideoPlayer, VideoView } from "expo-video";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useEffect, useState } from "react";
import { Image, StyleProp, View, ViewStyle } from "react-native";
import { AppIcon } from "./AppIcon";

export type TAppVideoProps = {
  url: string;
  style?: StyleProp<ViewStyle>;
  videoStyle?: StyleProp<ViewStyle>;
  setupOptions?: (player: VideoPlayer) => void;
};

export function AppVideo({
  url,
  style,
  videoStyle,
  setupOptions,
}: Readonly<TAppVideoProps>) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const player = useVideoPlayer(url, setupOptions);

  useEffect(() => {
    if (!url) {
      return;
    }
    if (isPlaying) {
      return player.play();
    }
    return player.pause();
  }, [isPlaying, url]);

  useEffect(() => {
    generateThumbnail();
  }, [url]);

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(url, {
        time: 5000,
      });
      setImage(uri);
    } catch (e) {
      console.warn(e);
    }
  };

  const renderThembnail = () => {
    if (!image || isPlaying) {
      return null;
    }
    return (
      <View
        style={{
          flex: 1,
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      >
        {!!image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
        {!isPlaying && (
          <View
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
            }}
          >
            <AppIcon
              onPress={() => setIsPlaying(true)}
              name="play"
              size={50}
              color={"#fff"}
            />
          </View>
        )}
      </View>
    );
  };
  if (!image) {
    return null;
  }
  return (
    <View
      style={[
        {
          flex: 1,
          minHeight: Sizes.wpx(250),
        },
        style,
      ]}
    >
      {renderThembnail()}
      {isPlaying && (
        <VideoView
          style={[{ flex: 1 }, videoStyle]}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
        />
      )}
    </View>
  );
}
