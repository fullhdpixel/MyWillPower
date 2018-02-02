import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors } from "../../Themes/";

export default StyleSheet.create({
  primary: {
    color: Colors.primary
  },
  primaryBG: {
    backgroundColor: Colors.primary
  },
  text: {
    color: Colors.text
  },
  content: {
    paddingBottom: 100
  },
  imageHolder: {
    justifyContent: "center",
    alignItems: "center"
  },
  centeredText: {
    textAlign: "center"
  },
  alignCenter: {
    alignSelf: "center"
  },
  alignEnd: {
    alignSelf: "flex-end"
  },
  horizontal: {
    flexDirection: "row"
  },
  vertical: {
    flexDirection: "column"
  },
  shadow: {
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowColor: "black",
    shadowOffset: { height: 5, width: 0 }
  },
  shadowText: {
    backgroundColor: "transparent",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {
      width: 0,
      height: 1
    },
    textShadowRadius: 1
  },
  footer: {
    backgroundColor: Colors.clear
  },
  font:
    Platform.OS === "ios"
      ? {
          fontFamily: "System",
          fontWeight: "normal",
          fontStyle: "normal"
        }
      : {
          fontFamily: "System",
          fontWeight: "normal",
          fontStyle: "normal"
        },
  fontBold: {
    fontFamily: "System",
    fontWeight: "bold",
    fontStyle: "normal"
  },
  icon: {
    fontSize: 32
  },
  header: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(141,141,141,0.2)"
  },
  headerIcon: {
    marginLeft: -10,
    fontSize: 36,
    color: Colors.primary
  },
  Button: {
    padding: 15
  },
  noMarginRight: {
    marginRight: 0
  },
  white: {
    color: Colors.white
  },
  noBorder: {
    borderColor: "transparent"
  }
});
