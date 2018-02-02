import React, { Component } from "react";
import { View, Image } from "react-native";
//Styles
import styles from "./Styles/RowImageStyles";
import stylesCommon from "../Containers/Styles/StylesCommon";
//Icons
import EvilIcons from "react-native-vector-icons/EvilIcons";
//Validation
import PropTypes from "prop-types";

import {
  Thumbnail,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";

export default class RowImage extends Component {
  render() {
    return (
      <Card style={styles.card}>
        <CardItem>
          <Left>
            <Thumbnail small source={this.props.userImg} />
            <Body>
              <Text style={[stylesCommon.fontBold]}>{this.props.username}</Text>
            </Body>
          </Left>
          <Right>
            <Icon
              name="md-more"
              style={[stylesCommon.text, styles.moreIcon]}
            />
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image
            style={styles.cardImage}
            source={this.props.image}
          />
        </CardItem>
        <CardItem
          style={styles.rowIcons}
        >
          <View style={styles.postActions}>
            <Left>
              <Button transparent>
                <Icon
                  name="ios-heart-outline"
                  style={[stylesCommon.text, styles.postIcon]}
                />
              </Button>
            </Left>
            <Left>
              <Button transparent>
                <EvilIcons
                  name="comment"
                  style={[stylesCommon.text, styles.postIcon]}
                />
              </Button>
            </Left>
            <Left>
              <Button transparent>
                <Icon
                  name="ios-send-outline"
                  style={[stylesCommon.text, styles.sendIcon]}
                />
              </Button>
            </Left>
          </View>
          <View style={styles.saveActions}>
            <Button transparent style={stylesCommon.alignEnd}>
              <Icon
                name="ios-bookmark-outline"
                style={[stylesCommon.text, styles.postIcon]}
              />
            </Button>
          </View>
        </CardItem>
      </Card>
    );
  }
}
//Validate all props
RowImage.propTypes = {
  userImg: PropTypes.image,
  username: PropTypes.string,
  image: PropTypes.image
};
