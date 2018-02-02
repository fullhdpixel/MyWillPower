//Default libraries
import React, { Component } from "react";
import { View, Dimensions, ImageBackground, Image } from "react-native";
//Theme Definitions
import { Colors, Images } from "../Themes";
//Styles
import stylesCommon from "./Styles/StylesCommon";
import styles from "./Styles/LotteryStyles";
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
  goProfile,
  toggleDrawer,
  saveActiveScreen
} from "app/Navigation/screens";

export default class LotteryScreen extends Component {
  constructor(props) {
    super(props);

    enableDrawers(this.props.navigator, true); //Enable drawers

    saveActiveScreen("LotteryScreen");
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
          <Body style={stylesCommon.body}>
            <Title style={stylesCommon.Title}># Chance To Party</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder style={styles.content}>

        </Content>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
LotteryScreen.propTypes = {
  navigator: PropTypes.navigator
};
