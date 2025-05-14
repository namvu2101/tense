import { createRef } from "react";
import { ScrollView } from "react-native";

const refList = createRef<ScrollView>();

const onScrollToEnd = () => {
  refList.current?.scrollToEnd({ animated: true });
};

export { refList, onScrollToEnd };
