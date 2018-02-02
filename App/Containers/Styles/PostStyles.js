import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.background
  },
  closeHeader: {
    fontSize: 46,
    color: Colors.primary
  },
  postBar: {
    marginTop: -15,
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  postInput: {
    backgroundColor: Colors.white,
    marginLeft: -5,
    paddingLeft: 10,
    paddingRight: 5,
    borderLeftWidth: 0,
    height: 250
  },
  postButton: {
    margin: 10,
    flex: 2,
    alignSelf: "flex-end"
  },
  icon: {
    fontSize: 40
  }
});
