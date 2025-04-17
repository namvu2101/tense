import { Sizes } from "@/constants/Sizes";
import { useAppColor } from "@/hooks/useAppColor";
import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  Dimensions,
} from "react-native";
import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
} from "react-native-reanimated";
import { ThemedText } from "../ThemedText";

export type TPages = { key: string; component: JSX.Element }[];
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export type TAppTabViewProps = {
  headers: string[];
  pages: TPages;
  isHeaderScrollable?: boolean;
  scrollEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  containerHeaderStyle?: StyleProp<ViewStyle>;
  initTab?: number;
};

export function AppTabView({
  headers,
  pages,
  isHeaderScrollable = true,
  scrollEnabled = true,
  headerStyle,
  style,
  containerHeaderStyle,
  initTab = 0,
}: Readonly<TAppTabViewProps>) {
  const { Colors } = useAppColor();
  const [tabSelected, setTabSelected] = useState(initTab);

  const flatListRef = useAnimatedRef<FlatList>();

  // Update tabSelected when user scrolls
  const scrollHandler = useAnimatedScrollHandler({
    onMomentumEnd: (event) => {
      const index = Math.round(event.contentOffset.x / Sizes.device_width);
      runOnJS(setTabSelected)(index);
    },
  });

  // Scroll FlatList to correct tab when header clicked
  const handleTabPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
    setTabSelected(index);
  };

  useEffect(() => {
    if (isHeaderScrollable) {
      refFlatList.current?.scrollToIndex({
        animated: true,
        index: tabSelected,
        viewPosition: 0.5,
      });
    }
  }, [tabSelected]);

  const refFlatList = useRef<FlatList>(null);

  const getTabStyle = (index: number): ViewStyle => ({
    backgroundColor: index === tabSelected ? Colors.background : "transparent",
    borderRadius: Sizes.border_radius * 2,
    alignItems: "center",
    justifyContent: "center",
    ...(isHeaderScrollable ? { width: Sizes.width(33) } : { flex: 1 }),
  });

  const getTextStyle = (index: number) => ({
    color: index === tabSelected ? Colors.tint : Colors.background,
  });

  const renderTabItem = (item: string, index: number) => (
    <TouchableOpacity
      key={item + index}
      onPress={() => handleTabPress(index)}
      style={[getTabStyle(index), headerStyle]}
    >
      <ThemedText type="defaultSemiBold" style={[getTextStyle(index)]}>
        {item}
      </ThemedText>
    </TouchableOpacity>
  );

  const renderHeader = () =>
    isHeaderScrollable ? (
      <FlatList
        ref={refFlatList}
        data={headers}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, padding: Sizes.wpx(2) }}
        renderItem={({ item, index }) => renderTabItem(item, index)}
        keyExtractor={(item, index) => item + index}
      />
    ) : (
      <View
        style={{
          flexDirection: "row",
          padding: Sizes.wpx(2),
          flex: 1,
        }}
      >
        {headers.map(renderTabItem)}
      </View>
    );

  return (
    <View style={[{ flex: 1 }, style]}>
      <View
        style={[
          {
            minHeight: Sizes.wpx(40),
            backgroundColor: Colors.tint,
            justifyContent: "center",
            alignItems: "center",
          },
          containerHeaderStyle,
        ]}
      >
        {renderHeader()}
      </View>
      <Animated.FlatList
        ref={flatListRef}
        data={pages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEnabled={scrollEnabled}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        renderItem={({ item }) => item.component}
        keyExtractor={(item, index) => item.key || index.toString()}
        initialScrollIndex={initTab}
        getItemLayout={(_, index) => ({
          length: Sizes.device_width,
          offset: Sizes.device_width * index,
          index,
        })}
      />
    </View>
  );
}
