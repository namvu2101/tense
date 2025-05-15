import { Platform } from "react-native";

const appVersion = { android: "1.0.2", ios: "1.0.2" };
const isIOS = Platform.OS === "ios";
export { appVersion, isIOS };
