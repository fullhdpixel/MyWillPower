//Default libraries
import React, { Component } from "react";
import { View, Dimensions, ImageBackground, Image } from "react-native";
//Theme Definitions
import { Colors, Images } from "../Themes";
//Styles
import stylesCommon from "./Styles/StylesCommon";
import styles from "./Styles/NotificationStyles";
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

export default class ChartsScreen extends Component {
  constructor(props) {
    super(props);

    enableDrawers(this.props.navigator, true); //Enable drawers

    saveActiveScreen("MapsScreen");
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
            <Title>Charts</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => goProfile()}>
              <Thumbnail small source={Images.user8} />
            </Button>
          </Right>
        </Header>
        <Content padder style={styles.content}>
        
        </Content>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
ChartsScreen.propTypes = {
  navigator: PropTypes.navigator
};
