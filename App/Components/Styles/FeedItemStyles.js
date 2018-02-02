import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  card: {
    marginTop: 0,
    shadowOpacity: 0
  },
  mainImg: { height: 200, width: null, flex: 1 },
  footer: {
    height: 40
  },
  likeIcon: {
    color: Colors.cardItem,
    fontSize: 30
  },
  likeText: {
    color: Colors.cardItem,
    fontSize: 16,
    marginLeft: -5
  },
  commentIcon: {
    color: Colors.cardItem,
    fontSize: 32
  },
  commentsText: {
    color: Colors.cardItem,
    fontSize: 16,
    flexWrap: "nowrap",
    marginLeft: -12
  },
  moreColumn: {
    maxWidth: 50
  },
  moreIcon: {
    color: Colors.cardItem,
    fontSize: 36,
    marginTop: 4
  }
});
