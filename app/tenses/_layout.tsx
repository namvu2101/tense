import { Stack } from "expo-router";

export default function TensesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="present/index" />
      <Stack.Screen name="pass/index" />
      <Stack.Screen name="future/index" />
    </Stack>
  );
}
