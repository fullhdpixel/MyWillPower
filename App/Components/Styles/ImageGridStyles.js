import { Dimensions, StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  gridImage: {
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 2,
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3
  }
});
