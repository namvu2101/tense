import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  ImageResizeMode,
  ImageURISource,
  ImageStyle as RNImageStyle,
} from "react-native";
import FastImage, { Source, ImageStyle } from "react-native-fast-image";
import { AppViewLoading } from "./AppLoading";
import { images } from "@/assets/images";

const ErrorImage: { [key: string]: boolean } = {};
const getResizeMode = (resizeMode?: string) => {
  switch (resizeMode) {
    case "contain":
      return FastImage.resizeMode.contain;
    case "stretch":
      return FastImage.resizeMode.stretch;
    case "center":
      return FastImage.resizeMode.center;
    default:
      return FastImage.resizeMode.cover;
  }
};
/**image url **/

export declare type AppImageSourceProps = number | ImageURISource | Source;

export type AppImageProps = Readonly<{
  resizeMode?: ImageResizeMode;
  style?: ImageStyle | RNImageStyle;
  defaultSource?: AppImageSourceProps;
  source: AppImageSourceProps;
  sizeSpinner?: number;
  noCache?: boolean;
  noLoading?: boolean;
}>;

function AppImage({
  resizeMode,
  style,
  defaultSource,
  source,
  sizeSpinner,
  noCache,
  noLoading = false,
}: AppImageProps) {
  const [loading, setLoading] = useState(() => {
    if (noLoading) {
      return false;
    }
    if (typeof source === "number") {
      return false;
    }

    if (imageSource === source) {
      return false;
    }

    if (source?.uri) {
      return !ErrorImage[source.uri];
    }

    return true;
  });
  const [imageSource, setImageSource] = useState(() => {
    if (typeof source === "number") {
      return source;
    }
    if (source?.uri && ErrorImage[source.uri]) {
      return defaultSource;
    }

    return source;
  });
  useEffect(() => {
    const handleSource = () => {
      if (typeof source === "number") {
        if (source !== imageSource) {
          setImageSource(source);
        }
        return;
      }
      if (!source?.uri) {
        return;
      }

      if (ErrorImage[source.uri]) {
        return;
      }

      if (typeof imageSource === "number") {
        setImageSource(source);
      }
      const image = imageSource as ImageURISource;

      if (!image || source.uri !== image.uri) {
        setImageSource(source);
      }
    };
    handleSource();
  }, [source]);

  const onError = () => {
    const errorSource = imageSource as ImageURISource;
    if (errorSource?.uri) {
      ErrorImage[errorSource.uri] = true;
    }
    if (defaultSource) {
      setImageSource(defaultSource);
    }
    setImageSource(images.grammar);
    setLoading(false);
  };

  if ((imageSource && typeof imageSource === "number") || noCache) {
    return (
      <Image
        testID="localImage"
        style={[
          {
            width: 86,
            height: 86,
          },
          style as RNImageStyle,
        ]}
        resizeMode={resizeMode}
        onError={onError}
        source={imageSource as ImageURISource}
      />
    );
  }

  //make loading animation while loading image
  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FastImage
          testID="loadingUriImage"
          style={[{ width: 86, height: 86 }, style as ImageStyle]}
          source={imageSource as Source}
          resizeMode={getResizeMode(resizeMode)}
          onLoadEnd={() => {
            setLoading(false);
          }}
          onError={onError}
        />
        <AppViewLoading
          sizeSpinner={sizeSpinner}
          style={[
            {
              width: 86,
              height: 86,
              position: "absolute",
            },
          ]}
        />
      </View>
    );
  }
  //render image after loading image
  return (
    <FastImage
      testID="uriImage"
      style={[
        {
          width: 86,
          height: 86,
        },
        style as ImageStyle,
      ]}
      source={imageSource as Source}
      resizeMode={getResizeMode(resizeMode)}
      onError={onError}
    />
  );
}

export { AppImage };
