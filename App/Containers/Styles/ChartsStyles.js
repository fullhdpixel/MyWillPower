import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  primary: {
    color: Colors.primary
  },
});
