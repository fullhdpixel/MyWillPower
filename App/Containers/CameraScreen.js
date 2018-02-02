//Default libraries
import React, { Component } from "react";
import { ImageBackground, Image } from "react-native";
//Theme Definitions
import { Colors, Images } from "app/Themes";
//Styles
import stylesCommon from "app/Containers/Styles/StylesCommon";
import styles from "app/Containers/Styles/NotificationStyles";
//Icons
import Feather from "react-native-vector-icons/Feather";

import {
  Thumbnail,
  Header,
  Icon,
  Body,
  Title,
  Button,
  Text,
  Left,
  Right,
  Footer,
  Container,
  Content,
  Form,
  Item,
  Input,
  Row
} from "native-base";

import { goPage, enableDrawers } from "app/Navigation/screens";

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);

    //Disable Drawer
    enableDrawers(this.props.navigator, false);
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
              <Feather style={stylesCommon.headerIcon} name="chevron-left" />
            </Button>
          </Left>
          <Body>
            <Title style={stylesCommon.title}>Camera</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={styles.content} />
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
CameraScreen.propTypes = {
  navigator: PropTypes.navigator
};
