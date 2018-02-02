//Default libraries
import React, { Component } from "react";
import { View } from "react-native";
//Theme Definitions
import { Images } from "app/Themes";
//Styles
import styles from "app/Components/Styles/ProfileTabsStyles";

import { Content } from "native-base";

import RowImage from "app/Components/RowImage";

export default class ProfileTabs extends Component {
  // Inside of a component's render() method:
  render() {
    let rowImages = this.props.images.map((image, index) => {
      return (
        <RowImage
          key={index}
          image={image}
          username="JWilson"
          userImg={Images.user8}
        />
      );
    });

    return (
      <View style={[styles.tabs, styles.content]}>
        <View>{rowImages}</View>
      </View>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
ProfileTabs.propTypes = {
  images: PropTypes.image
};