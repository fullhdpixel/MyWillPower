//Import all the individual screen
import LoginScreen from "app/Containers/LoginScreen";

import ProfileScreen from "app/Containers/ProfileScreen";
import LotteryScreen from "app/Containers/LotteryScreen";
import GainsScreen from "app/Containers/GainsScreen";
import AboutScreen from "app/Containers/AboutScreen";

import DrawerLeft from "app/Navigation/DrawerLeft";

import { Navigation } from "react-native-navigation";

import { rootNavigator } from "app/Containers/LoginScreen";

export function registerScreens() {
  // Manifest of possible screens
  Navigation.registerComponent("DrawerLeft", () => DrawerLeft);
  Navigation.registerComponent("LoginScreen", () => LoginScreen);

  //Visible on Drawer
  Navigation.registerComponent("ProfileScreen", () => ProfileScreen);
  Navigation.registerComponent("LotteryScreen", () => LotteryScreen);
  Navigation.registerComponent("GainsScreen", () => GainsScreen);
  Navigation.registerComponent("AboutScreen", () => AboutScreen);
}

//Fetch current screen
export async function getActiveScreen() {
  return null;
}

//Save current screen in storage
export async function saveActiveScreen(screen) {
  return null;
}

/** @description Go to requested screen
 * @param {navigator} navigator this.props.navigator
 * @param {string} screen Specify which screen to transition to
 * @param {boolean} animated Whether to animate the screen transition
 * @param {string} animationType "fade" "slide-horizontal"
 * @param {boolean} resetTo Whether the Navigation Stack should be cleared
 * @param {boolean} closeDrawer Whether the drawer should be forcefully closed
 */  
export function goPage(navigator, screen, animated, animationType, resetTo, closeDrawer) {
  if (closeDrawer) {
    toggleDrawer("close");
  }


  if (resetTo) {
    navigator.resetTo({
      screen: screen,
      animated: animated,
      animationType: animationType,
      navigatorStyle: {
        navBarHidden: true
      },
      navigatorButtons: {}
    });
  } else {
    navigator.push({
      screen: screen,
      animated: animated,
      animationType: animationType,
      backButtonTitle: undefined,
      navigatorStyle: {
        navBarHidden: true
      },
      navigatorButtons: {}
    });
  }
}

/** @description Enable or disable drawer
 * @param {navigator} navigator this.props.navigator
 * @param {boolean} enabled Whether both side drawers are enabled
 */  
export function enableDrawers(navigator, enabled) {
  navigator.setDrawerEnabled({
    side: "left",
    enabled: enabled
  });

  navigator.setDrawerEnabled({
    side: "right",
    enabled: enabled
  });
}

/** @description Toggle drawer
 * @param {string} "open" or "close"
 * @param {string} "left" or "right"
 */  
export function toggleDrawer(open, side) {
  rootNavigator.toggleDrawer({
    side: side,
    animated: true,
    to: open
  });
}