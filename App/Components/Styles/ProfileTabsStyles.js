import { Dimensions, StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  content: {
    backgroundColor: "#f5f5f5"
  },
  tabs: {
    marginLeft: -3,
    marginRight: -3
  }
});
