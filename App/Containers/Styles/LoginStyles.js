import { PixelRatio, StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

const defaultMargin = PixelRatio.getPixelSizeForLayoutSize(5);

export default StyleSheet.create({
  image: {
    position: "absolute",
    flex: 1,
    height: "100%"
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: "contain"
  },
  linearGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    // opacity: 0.75
  },
  facebookButton: {
    backgroundColor: Colors.facebook,
    position: "absolute",
    alignSelf: "center",
    bottom: "20%",
    paddingLeft: 10
  },
  scicon: {
    color: Colors.white,
    fontSize: 26
  },
});
