//Default libraries
import React, { Component } from "react";
import { StatusBar } from "react-native";
//Styles
import stylesCommon from "./Styles/StylesCommon";
import styles from "./Styles/AboutStyles";

import {
  Header,
  Content,
  Icon,
  Body,
  Title,
  Button,
  Text,
  Left,
  Right,
  Container,
  List,
  ListItem,
  Switch,
  Separator,
  Thumbnail,
  StyleProvider
} from "native-base";
//Icons
import Feather from "react-native-vector-icons/Feather";
//Themes Definitions
import { Images } from "app/Themes";
//Navigator
import {
  enableDrawers,
  goPage,
  saveActiveScreen
} from "app/Navigation/screens";
//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airplane: false,
      vibrate: true,
      private: false
    };

    saveActiveScreen("AboutScreen");

    enableDrawers(this.props.navigator, false);//Disable Drawers
  }

  onChangeFunction(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
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
              <Title>About</Title>
            </Body>
            <Right />
          </Header>
          <StatusBar
            barStyle="dark-content"
          />
          <Content style={styles.content}>
            <List>
              <ListItem icon last style={{ height: 80 }}>
                <Left>
                  <Thumbnail source={Images.user7} />
                </Left>
                <Body>
                  <Text>Jackie Wilson</Text>
                  <Text note>General, Account & More Settings</Text>
                </Body>
              </ListItem>
            </List>
            <Separator bordered style={styles.seperator}>
              <Text>Information</Text>
            </Separator>
            <Text>Information</Text>
            
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
AboutScreen.propTypes = {
  navigator: PropTypes.navigator
};
