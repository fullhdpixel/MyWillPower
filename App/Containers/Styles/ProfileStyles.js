import { PixelRatio, StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from '../../Themes/'

const defaultMargin = PixelRatio.getPixelSizeForLayoutSize(5);

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  content: {
    textAlign:"center"
  }
});
