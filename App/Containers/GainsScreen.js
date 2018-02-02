//Default libraries
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
//Theme Definitions
import { Colors, Images } from "../Themes";
//Styles
import stylesCommon from "./Styles/StylesCommon";
// import styles from "./Styles/NotificationStyles";
//Icons
import EvilIcons from "react-native-vector-icons/EvilIcons";

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
import {
  enableDrawers,
  goPage,
  toggleDrawer,
  saveActiveScreen
} from "app/Navigation/screens";

import MapView from 'react-native-maps';
// "AIzaSyC9MCWjXneXxuHTaydkxhYhIEi7Ry3XWrs"

export default class GainsScreen extends Component {
  constructor(props) {
    super(props);

    //Enable Drawer
    enableDrawers(this.props.navigator, true)

    saveActiveScreen("GainsScreen");
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={stylesCommon.header}>
          <Left>
            <Button transparent onPress={() => toggleDrawer()}>
              <Icon style={stylesCommon.primary} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Map</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => goPage(this.props.navigator, "ProfileScreen", true, "fade", true)}>
              <Thumbnail small source={Images.user8} />
            </Button>
          </Right>
        </Header>
        <Content padderstyle={styles.content}>
          
        </Content>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
MapScreen.propTypes = {
  navigator: PropTypes.navigator
};
