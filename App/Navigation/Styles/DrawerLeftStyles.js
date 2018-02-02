import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "app/Themes/";

export default StyleSheet.create({
  drawerImage: {
    position: "absolute",
    width: "100%",
    height: 140
  },
  drawerGradient: {
    position: "absolute",
    height: 140,
    opacity: 0.8,
    width: Dimensions.get("window").width
  },
  userInfoContainer: {
    paddingTop: 40,
    backgroundColor: "transparent"
  },
  userThumbnailView: {
    flex: 1
  },
  userInfoView: {
    flex: 2,
    justifyContent: "center"
  },
  username: {
    color: "#fff",
    fontSize: 20
  },
  userhandle: {
    color: "#eee"
  },
  userVerified: {
    marginLeft: -15,
    fontSize: 22,
    color: "#007aff"
  },
  userStats: {
    backgroundColor: "rgba(0,0,0,0.2)",
    marginTop: -3
  },
  userStatsText: {
    color: "white",
    fontSize: 14
  },
  statsexplanation: {
    color: "white",
    left: 5
  },
  drawerBadge: {
    backgroundColor: Colors.primary,
    position: "absolute",
    top: 5,
    left: 125
  },
  drawerList: {
    backgroundColor: "transparent"
  },
  drawerItem: {
    marginLeft: 0,
    paddingVertical: 30
  },
  drawerItemBody: {
    borderBottomWidth: 0,
    left: 30
  },
  drawerIcon: {
    left: 20
  },
  drawerText: {
    marginTop: -5,
    fontSize: 18,
    color: "black"
  },
  drawerItemBadge: {
    marginTop: 7,
    backgroundColor: Colors.primary
  },
  activeListItem: {
    //Set active styles for listItem here
    backgroundColor: "rgba(0,0,0,0.045)"
  },
  userBadge: {
    top: 0,
    left: -20,
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: "black"
  },
  userBadgeText: {
    position: "absolute",
    top: 2,
    left: 33,
    color: "white",
    backgroundColor: "transparent"
  },
  userSwitchBody: {
    flexDirection: "row",
    flex: 1
  },
  userThumb: {
    marginHorizontal: 5
  },
  footer: {
    backgroundColor: "#FCFCFC",
    borderTopWidth: 1,
    borderColor: "#ccc"
  },
  footerAction: {
    flex: 1,
    justifyContent: "center"
  }
});
