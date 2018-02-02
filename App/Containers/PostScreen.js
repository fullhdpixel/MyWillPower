// Default libraries
import React, { Component } from "react";
import { View } from "react-native";
// Styles
import stylesCommon from "./Styles/StylesCommon";
import styles from "./Styles/PostStyles";
// Icons
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";

import {
  Header,
  Icon,
  Body,
  Title,
  Button,
  Text,
  Left,
  Right,
  Container,
  Item,
  Input
} from "native-base";

import { enableDrawers, goPage, saveActiveScreen } from "../Navigation/screens";

export default class PostScreen extends Component {
  constructor(props) {
    super(props);

    //Disable Drawer
    enableDrawers(this.props.navigator, false);

    saveActiveScreen("PostScreen");
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={stylesCommon.header}>
          <Left>
            <Button
              transparent
              onPress={() =>
                goPage(this.props.navigator, "FeedScreen", true, "fade", true)
              }
            >
              <Icon style={[styles.closeHeader]} name="close" />
            </Button>
          </Left>
          <Body>
            <Title>Post</Title>
          </Body>
          <Right />
        </Header>
        <Item regular style={styles.postInput}>
          <Input
            placeholder="Start Typing..."
            multiline
            numberOfLines={10}
            style={[stylesCommon.font, styles.postInput]}
          />
        </Item>
        <Header>
          <View style={styles.postBar}>
            <Left>
              <Button transparent>
                <EvilIcons
                  name="camera"
                  style={[stylesCommon.text, styles.icon]}
                />
              </Button>
            </Left>
            <Left>
              <Button transparent>
                <EvilIcons
                  name="location"
                  style={[stylesCommon.text, styles.icon, styles.locationIcon]}
                />
              </Button>
            </Left>
            <Left>
              <Button transparent>
                <EvilIcons
                  name="tag"
                  style={[stylesCommon.text, styles.icon]}
                />
              </Button>
            </Left>
          </View>
          <Button
            style={[stylesCommon.primaryBG, styles.postButton]}
            rounded
            success
          >
            <Text style={[stylesCommon.fontBold]}>POST</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
PostScreen.propTypes = {
  navigator: PropTypes.navigator
};
