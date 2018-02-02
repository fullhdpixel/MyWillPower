import { Navigation } from "react-native-navigation";
import { registerScreens } from "./screens";

//Suppress errors
console.disableYellowBox = true;

// screen related book keeping
registerScreens();

// this will start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: "LoginScreen", // First screen to become visible
    navigatorStyle: {
      navBarHidden: true
    },
  },
  drawer: {
    // side menu drawers
    left: {
      // drawer from the left
      screen: "DrawerLeft"
    },
    style: {
      // ( iOS only )
      drawerShadow: false, // optional, add this if you want a side menu drawer shadow
      contentOverlayColor: "rgba(0,0,0,0.3)", // optional, add this if you want a overlay color when drawer is open
      leftDrawerWidth: 75 // optional, add this if you want a define left drawer width (50=percent)
    },
    type: "MMDrawer", // optional, iOS only, types: "TheSideBar", "MMDrawer" default: "MMDrawer"
    animationType: "slide-and-scale", //optional, iOS only, for MMDrawer: "door", "parallax", "slide", "slide-and-scale"
    // for TheSideBar: "airbnb", "facebook", "luvocracy","wunder-list"
    disableOpenGesture: false // optional, can the drawer, both right and left, be opened with a swipe instead of button
  },
  animationType: "fade", // optional, add transition animation to root change: "none", "slide-down", "fade"
});
