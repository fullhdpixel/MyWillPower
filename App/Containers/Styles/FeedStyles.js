import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.background
  },
  featured: {
    backgroundColor: "#FCFCFC",
    height: 50
  },
  featuredText: {
    color: "black",
    marginLeft: 0
  },
  recommendedUsersRow: {
    // backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  userContainer: {
    marginHorizontal: 10
  },
  userCircle: {
    marginHorizontal: 5,
    borderRadius: 85 / 2,
    height: 85,
    width: 85,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#d42b82"
  },
  userImg: {
    // width: 80,
    // height: 80,
    borderColor: "#FFF",
    borderWidth: 4,
    marginHorizontal: 5,
    alignSelf: "center"
  },
  username: {
    fontWeight: "bold",
    paddingTop: 15,
    textAlign: "center",
    color: "black"
  },
  timestamp: {
    paddingTop: 5,
    textAlign: "center",
    color: "#8D8D8D"
  }
});
