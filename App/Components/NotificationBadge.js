import React, { Component } from "react";
import { View } from "react-native";
//Styles
import styles from "./Styles/NotificationBadgeStyles";
import stylesCommon from "../Containers/Styles/StylesCommon";
//Icons
import EvilIcons from "react-native-vector-icons/EvilIcons";
//Validation
import PropTypes from "prop-types";

export default class NotificationBadge extends Component {
  render() {
    return (
      <View
        style={{
          position: "absolute",
          top: 45,
          left: 50
        }}
      >
        <View
          style={[
            {
              backgroundColor: this.props.color
            },
            styles.circle
          ]}
        />
        <EvilIcons
          style={[stylesCommon.white, styles.icon]}
          name={this.props.icon}
        />
      </View>
    );
  }
}

//Validate all props
NotificationBadge.propTypes = {
  color: PropTypes.color,
  icon: PropTypes.icon
};
