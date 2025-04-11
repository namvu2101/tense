import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export function useAppColor() {
  const theme = useColorScheme() ?? "light";

  if (theme === "light") {
    return { Colors: Colors.light };
  }
  return  { Colors: Colors.dark }
}
