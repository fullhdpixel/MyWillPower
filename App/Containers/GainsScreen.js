//Default libraries
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
//Theme Definitions
import { Colors, Images } from "../Themes";
//Styles
import stylesCommon from "./Styles/StylesCommon";
import styles from "./Styles/GainsStyles";
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
          <Body style={stylesCommon.body}>
            <Title>Extra Gains</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder style={styles.content}>
          <Text>Expected Increase in Life: 20h</Text>
          <Text>Percentage among peers: TOP 20 %</Text>
        </Content>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
GainsScreen.propTypes = {
  navigator: PropTypes.navigator
};
