import "../Config";
import DebugConfig from "../Config/DebugConfig";
import React from "react";
import { View } from "react-native";

// import RootContainer from "./RootContainer";
import {
  registerScreens,
  registerScreenVisibilityListener
} from "../Navigation/AppNavigation";
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

Navigation.registerComponent("LoginScreen", () => LoginScreen);

class App extends React.Component {
  constructor(props) {
    super(props);

    Navigation.startSingleScreenApp({
      screen: {
        screen: "LoginScreen", // unique ID registered with Navigation.registerScreen
        title: "Login", // title of the screen as appears in the nav bar (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      },
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
      animationType: "slide-down" // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    });
  }

  render() {
    return <View style={{ flex: 1 }}>...</View>;
  }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
