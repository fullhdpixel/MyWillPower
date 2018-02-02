//Import all the individual screen
import LoginScreen from "app/Containers/LoginScreen";
import RegisterScreen from "app/Containers/RegisterScreen";
import TacScreen from "app/Containers/TacScreen";
import CameraScreen from "app/Containers/CameraScreen";
import PostScreen from "app/Containers/PostScreen";
import NotificationScreen from "app/Containers/NotificationScreen";

import ProfileScreen from "app/Containers/ProfileScreen";
import FeedScreen from "app/Containers/FeedScreen";
import GalleryScreen from "app/Containers/GalleryScreen";
import MapScreen from "app/Containers/MapScreen";
import ChartsScreen from "app/Containers/ChartsScreen";
import ContactsScreen from "app/Containers/ContactsScreen";
import ChatScreen from "app/Containers/ChatScreen";
import SettingsScreen from "app/Containers/SettingsScreen";

import DrawerLeft from "app/Navigation/DrawerLeft";
import DrawerRight from "app/Navigation/DrawerRight";

import { Navigation } from "react-native-navigation";

import { rootNavigator } from "app/Containers/LoginScreen";

export function registerScreens() {
  // Manifest of possible screens
  Navigation.registerComponent("DrawerLeft", () => DrawerLeft);
  Navigation.registerComponent("DrawerRight", () => DrawerRight);
  Navigation.registerComponent("LoginScreen", () => LoginScreen);
  Navigation.registerComponent("RegisterScreen", () => RegisterScreen);
  Navigation.registerComponent("TacScreen", () => TacScreen);
  Navigation.registerComponent("NotificationScreen", () => NotificationScreen);
  Navigation.registerComponent("CameraScreen", () => CameraScreen);
  Navigation.registerComponent("PostScreen", () => PostScreen);

  //Visible on Drawer
  Navigation.registerComponent("ProfileScreen", () => ProfileScreen);
  Navigation.registerComponent("FeedScreen", () => FeedScreen);
  Navigation.registerComponent("GalleryScreen", () => GalleryScreen);
  Navigation.registerComponent("MapScreen", () => MapScreen);
  Navigation.registerComponent("ChartsScreen", () => ChartsScreen);
  Navigation.registerComponent("ContactsScreen", () => ContactsScreen);
  Navigation.registerComponent("ChatScreen", () => ChatScreen);
  Navigation.registerComponent("SettingsScreen", () => SettingsScreen);
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