import React, { Component } from "react";
import { Image } from "react-native";
//Styles
import styles from "./Styles/FeedItemStyles";
import stylesCommon from "../Containers/Styles/StylesCommon";
//Icons
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

//Theme Definitions
import { Colors } from "../Themes";

import {
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Card,
  CardItem,
  Thumbnail
} from "native-base";

export default class FeedItem extends Component {
  constructor(props) {
    super(props);
    //Do something with the props
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardItem>
          <Left>
            <Thumbnail source={this.props.data.profileImg} />
            <Body>
              <Text style={[stylesCommon.fontBold]}>{this.props.data.name}</Text>
              <Text
                numberOfLines={1}
                note
                style={[stylesCommon.font, stylesCommon.noMarginRight]}
              >
                {this.props.data.city}
              </Text>
            </Body>
          </Left>
          <Right>
            <Icon name="clock" style={{ color: Colors.cardItem }} />
            <Text note style={[stylesCommon.font]}>
              {this.props.data.timestamp}
            </Text>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={[stylesCommon.font, {color: "#333"}]}>
            {this.props.data.text}
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={this.props.data.mainImg}
            style={styles.mainImg}
          />
        </CardItem>
        <CardItem style={styles.footer}>
          <Left>
            <Button transparent>
              <Icon
                active
                name="ios-heart-outline"
                style={styles.likeIcon}
              />
              <Text
                numberOfLines={1}
                style={[
                  stylesCommon.font,
                  styles.likeText
                ]}
              >
                {this.props.data.likes} Likes
              </Text>
            </Button>
          </Left>
          <Left>
            <Button transparent>
              <EvilIcons
                active
                name="comment"
                style={styles.commentIcon}
              />
              <Text
                numberOfLines={1}
                style={[
                  stylesCommon.font,
                  styles.commentsText
                ]}
              >
                {this.props.data.comments} Comments
              </Text>
            </Button>
          </Left>
          <Right style={styles.moreColumn}>
            <Button transparent style={{}}>
              <Ionicons
                active
                name="ios-more-outline"
                style={[
                  stylesCommon.font,
                  styles.moreIcon
                ]}
              />
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
