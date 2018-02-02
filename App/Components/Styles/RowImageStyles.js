import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    marginTop: 0,
    marginBottom: 10
  },
  cardImage: {
    flex: 1,
    resizeMode: "cover",
    height: Dimensions.get("window").width
  },
  moreIcon: {
    fontSize: 30,
  },
  rowIcons: {
    height: 50
  },
  postActions: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  saveActions: {
    flex: 1
  },
  postIcon: {
    fontSize: 36
  },
  sendIcon: {
    fontSize: 40
  },
});
