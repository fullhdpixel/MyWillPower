import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2
  },
  icon: {
    backgroundColor: "transparent",
    top: -23,
    left: 0.5,
    fontSize: 24
  }
});
