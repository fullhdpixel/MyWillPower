import { Dimensions, StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .32)',
  },
  cover: {
    height: 240,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  tabbar: {
    backgroundColor: 'rgba(0, 0, 0, .32)',
    elevation: 0,
    shadowOpacity: 0,
  },
  // primary: {
  //   color: Colors.primary
  // },
  // container: {}, //keep this here
  // customView: {
  //   top: 40
  // },
  // profileDarken: {
  //   position: "absolute",
  //   top: -80,
  //   left: -20,
  //   right: 0,
  //   backgroundColor: "rgba(0,0,0,0.5)",
  //   width: "110%",
  //   height: Dimensions.get("window").height / 2
  // },
  // username: {
  //   flex: 1,
  //   textAlign: "center",
  //   marginTop: 10,
  //   color: "white",
  //   fontWeight: "bold",
  //   fontSize: 20
  // },
  // userDescription: {
  //   color: "rgba(256,256,256,0.8)",
  //   top: 5
  // },
  // statsGrid: {
  //   top: 20
  // },
  // statsNumber: {
  //   color: "white",
  //   fontSize: 22
  // },
  // statsDescription: {
  //   color: "rgba(256,256,256,0.8)",
  //   fontSize: 14
  // },
  // statsCol: {
  //   alignItems: "center"
  // },
  // tabBar: {
  //   backgroundColor: "white"
  // },
  // iconTabBar: {
  //   color: "black"
  // },
  // indicator: {
  //   backgroundColor: "black"
  // }
});
