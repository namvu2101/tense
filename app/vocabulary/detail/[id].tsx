import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import TabOne from "../items/TabOne";
import TabTwo from "../items/TabTwo";
import { AppViewLoading } from "@/components/ui/AppLoading";
import useGetVocabulary from "../modules/useGetVocabulary";
import { useForm } from "react-hook-form";
import useGetExams from "../modules/useGetExams";
import TabExams from "../items/TabExams";

const renderScene = SceneMap({
  first: TabOne,
  second: TabTwo,
  three: TabExams,
});

const routes = [
  { key: "first", title: "First" },
  { key: "second", title: "Second" },
  { key: "three", title: "three" },
];

export default function Detail() {
  const { id } = useLocalSearchParams();
  const layout = useWindowDimensions();
  const { data, isLoading } = useGetVocabulary(id as any);
  const { data: exercises } = useGetExams(id as any);
  const [index, setIndex] = React.useState(0);
  const methods = useForm({
    mode: "all",
    values: { data: data, exams: exercises, index: 0 },
  });

  if (isLoading) return <AppViewLoading style={{ flex: 1 }} />;
  if (!data) return;

  return (
    <ThemedView
      form={methods}
      headerTitle={id.toString().replace("_", " ").toUpperCase()}
    >
      <TabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={(index) => {
          methods.setValue("index", index);
          setIndex(index);
        }}
        initialLayout={{ width: layout.width }}
        swipeEnabled={index !== 2 && index !== 3}
        renderTabBar={() => null}
      />
    </ThemedView>
  );
}
