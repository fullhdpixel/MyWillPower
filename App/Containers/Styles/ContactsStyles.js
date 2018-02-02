import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.background
  },
  searchContainer: {
    height: 40
  },
  searchbar: {
    marginTop: -15
  },
  list: {
    marginBottom: 100
  },
  contactItem: {
    borderBottomWidth: 1,
    borderColor: "rgba(141,141,141,0.2)"
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  checkbox: {
    borderRadius: 4
  },
  nextButton: {
    backgroundColor: Colors.primary,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      height: 10,
      width: 0
    }
  },
  nextButtonIcon: {
    fontSize: 22,
    color: Colors.white
  },
  actionRow: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#1D1D1D",
    justifyContent: "flex-end",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  buttonAction: {
    backgroundColor: Colors.white
  },
  buttonActionText: {
    paddingLeft: 10,
    color: Colors.primary
  },
  messageButton: {
    paddingLeft: 10,
    marginRight: 10
  },
  followButton: {
    alignSelf: "flex-end",
    paddingLeft: 10
  },
  actionIcon: {
    color: "#BDBDBD"
  },
  statsRow: {
    backgroundColor: "#1D1D1D",
    marginLeft: 10,
    marginRight: 10,
    borderTopWidth: 1,
    borderColor: "rgba(256,256,256,0.2)",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  statsText: {
    paddingTop: 15,
    paddingBottom: 5,
    fontSize: 24,
    color: Colors.white,
    alignSelf: "center"
  },
  statsTextNote: {
    paddingBottom: 15,
    color: Colors.white,
    alignSelf: "center"
  }
});
