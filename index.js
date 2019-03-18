import { AppRegistry } from "react-native";
import { AppNavigator } from "./navigation/mainNavigation";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => AppNavigator);
