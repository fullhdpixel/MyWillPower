//Default libraries
import React, { Component } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { Navigation } from "react-native-navigation";
import {
  goProfile,
  getActiveScreen,
  toggleDrawer
} from "app/Navigation/screens";
//Theme Definitions
import { Colors, Images } from "app/Themes";
//Styles
import styles from "app/Navigation/Styles/DrawerRightStyles";
import stylesCommon from "app/Containers/Styles/StylesCommon";
//Icons
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  Content,
  List,
  ListItem,
  Body,
  Left,
  Right,
  Icon,
  Text,
  Thumbnail,
  CardItem,
  Badge,
  Button
} from "native-base";

import { rootNavigator } from "../Containers/LoginScreen";

export default class DrawerRight extends Component {
  render() {
    return (
      <Container>
        <Content>
          {/* Screen name and handle */}
          <CardItem>
            <Body>
              <View style={stylesCommon.horizontal}>
                <Text note style={[stylesCommon.fontBold, styles.username]}>
                  Jackie Wilson
                </Text>
                <MaterialIcons name="verified-user" style={styles.verified} />
              </View>
              <Text style={styles.userhandle}>@jwilson</Text>
            </Body>
          </CardItem>
          {/* User profile stats */}
          <CardItem>
            <Body style={stylesCommon.horizontal}>
              <Text style={[styles.userstats, stylesCommon.fontBold]}>177</Text>
              <Text note style={styles.statsexplanation}>
                Following
              </Text>
              <Text style={[styles.userstats, stylesCommon.fontBold]}>488</Text>
              <Text note style={styles.statsexplanation}>
                Followers
              </Text>
            </Body>
          </CardItem>
          {/* Navigation */}
          <List style={[styles.drawerList]}>
            <ListItem
              icon
              onPress={() => this.goPage("FeedScreen")}
              //   style={[styles.drawerItem, this.getActiveStyle("FeedScreen")]}
            >
              <Left>
                <Icon name="ios-paper-outline" style={styles.drawerIcon} />
              </Left>
              <Body style={[styles.drawerItemBody]}>
                <Text note style={styles.drawerText}>
                  Feed
                </Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        <Button onPress={() => this.goBack()} full transparent>
          <Text note style={styles.buyTheme}>
            BUY THEME
          </Text>
        </Button>
      </Container>
    );
  }
}
