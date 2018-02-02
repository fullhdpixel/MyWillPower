import { PixelRatio, StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

const defaultMargin = PixelRatio.getPixelSizeForLayoutSize(5);

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
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
    marginTop: defaultMargin,
    borderRadius: 5
  },
  scicon: {
    color: Colors.white,
    fontSize: 26
  },
  googleButton: {
    backgroundColor: Colors.google,
    marginTop: defaultMargin,
    borderRadius: 5
  },
  loginButton: {
    marginTop: defaultMargin * 2,
    marginBottom: defaultMargin,
    borderRadius: 5
  },
  loginText: {
    color: Colors.primary
  },
  createAccount: {
    paddingLeft: defaultMargin
  },
  forgotPassword: {
    paddingRight: defaultMargin
  },
  icon: {
    color: Colors.white
  },
  input: {
    color: Colors.white
  },
  bottomLink: {
    color: Colors.white
  },
  or: {
    color: Colors.white,
    marginVertical: defaultMargin,
    paddingHorizontal: 10
  }
});
