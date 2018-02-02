//Default libraries
import React, { Component } from "react";
import { View, Dimensions, ImageBackground, Image } from "react-native";
//Theme Definitions
import { Colors, Images } from "../Themes";
//Styles
import stylesCommon from "./Styles/StylesCommon";
import styles from "./Styles/LotteryStyles";
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

import {
  enableDrawers,
  goPage,
  saveActiveScreen
} from "app/Navigation/screens";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    enableDrawers(this.props.navigator, false); //Disable drawers

    saveActiveScreen("LotteryScreen");
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={stylesCommon.header}>
          <Left>
            <Button
              transparent
              onPress={() =>
                goPage(this.props.navigator, "LotteryScreen", true, "fade", true)
              }
            >
              <Feather style={stylesCommon.headerIcon} name="chevron-left" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={styles.content}>

        </Content>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
ProfileScreen.propTypes = {
  navigator: PropTypes.navigator
};
