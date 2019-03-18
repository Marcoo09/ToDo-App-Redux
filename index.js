import React from "react";
import { Provider } from "react-redux";
import { AppRegistry } from "react-native";
import { AppNavigator } from "./navigation/mainNavigation";
import { createStore } from "redux";
import todoApp from "./reducers/todoApp";
import { name as appName } from "./app.json";

const store = createStore(todoApp);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
