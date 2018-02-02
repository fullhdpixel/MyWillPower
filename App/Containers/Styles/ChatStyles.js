import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.background
  },
  list: {
    borderColor: "#8D8D8D",
    borderBottomWidth: 1
  },
  featured: {
    backgroundColor: "#FCFCFC",
    height: 50
  },
  featuredText: {
    color: "black",
    marginLeft: 0
  },
  chatCirclesRow: {
    backgroundColor: "#FCFCFC",
    padding: 10
  },
  chatCircle: {
    marginHorizontal: 5,
    borderRadius: 60 / 2,
    height: 60,
    width: 60,
    justifyContent: "center"
  },
  chatActive: {
    backgroundColor: "#2962FF"
  },
  chatInactive: {
    backgroundColor: "#E1E1E1"
  },
  chatBadge: {
    backgroundColor: Colors.primary,
  },
  userImg: {
    borderColor: "#FFF",
    borderWidth: 4,
    marginHorizontal: 5,
    alignSelf: "center"
  },
  username: {
    left: 5,
    paddingVertical: 5,
  },
  statusBadge: {
    marginTop: 6,
    left: -5,
    width: 12,
    height: 12,
    borderRadius: 12 / 2
  },
  onlineBadge: {
    backgroundColor: "#1FAD25"
  },
  offlineBadge: {
    backgroundColor: "grey"
  },
  chatText: {
    color: "black",
    paddingVertical: 5
  },
  timestamp: {
    marginBottom: 10,
    color: "black"
  },
  checkallIcon: {
    color: "#1FAD25",
    fontSize: 18
  }
});
