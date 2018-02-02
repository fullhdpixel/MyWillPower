import { StyleSheet } from "react-native";
import { ApplicationStyles } from "app/Themes/";
import { Colors } from "app/Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  content: {
    paddingHorizontal: 20
  },
  row: {
    marginTop: 36
  },
  form: {
    paddingHorizontal: 5
  },
  item: {
    marginTop: 18,
    borderRadius: 5
  },
  nextButton: {
    backgroundColor: Colors.primary,
    flex: 1
  }
});
