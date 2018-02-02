import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.background
  },
  notificationItem: {
    marginLeft: 0,
    paddingLeft: 15
  }
});
