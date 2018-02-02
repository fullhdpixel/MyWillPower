//Default libraries
import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { goPage } from "app/Navigation/screens";
//Theme Definitions
import { Images } from "app/Themes";
//Styles
import styles from "app/Navigation/Styles/DrawerLeftStyles";
import stylesCommon from "app/Containers/Styles/StylesCommon";
//Icons
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  Container,
  Content,
  List,
  ListItem,
  Body,
  Left,
  Icon,
  Text,
  Thumbnail,
  CardItem,
  Badge,
  Footer
} from "native-base";

import { rootNavigator } from "app/Containers/LoginScreen";
//Gradient
import LinearGradient from "react-native-linear-gradient";

export default class DrawerLeft extends Component {
  constructor(props) {
    super(props);

    //Keeps track of activestate
    this.state = {
      activeScreen: "LotteryScreen"
    };
  }

  getActiveStyle = testRoute => {
    return this.state.activeScreen == testRoute ? styles.activeListItem : {};
  };

  render() {
    return (
      <Container>
        <Image source={Images.stockedit} style={styles.drawerImage} />

        <LinearGradient
          colors={["#cfc469", "#f19e1f", "#d02c52"]}
          style={styles.drawerGradient}
        />

        <TouchableOpacity
          onPress={() =>
            goPage(
              rootNavigator,
              "ProfileScreen",
              true,
              "slide-horizontal",
              false, true
            )
          }
        >
          <CardItem style={styles.userInfoContainer}>
            <Left style={styles.userThumbnailView}>
              <Thumbnail source={Images.user1} />
            </Left>
            <Body style={styles.userInfoView}>
              <View style={stylesCommon.horizontal}>
                <Text note style={[stylesCommon.fontBold, styles.username]}>
                  Jiulong Zhao
                </Text>
              </View>
              <Text style={styles.userhandle}>@JZhao</Text>
            </Body>
          </CardItem>
          {/* User profile stats */}
          <CardItem style={[stylesCommon.shadow, styles.userStats]}>
            <Body style={stylesCommon.horizontal}>
              <Text style={[styles.userStatsText, stylesCommon.fontBold]}>
                $ 1
            </Text>
              <Text note style={styles.statsexplanation}>
                Following
            </Text>
              <Text style={[styles.userStatsText, stylesCommon.fontBold]}>
                5%
            </Text>
              <Text note style={styles.statsexplanation}>
                Followers
            </Text>
            </Body>
          </CardItem>
        </TouchableOpacity>
        <Content>
          {/* Navigation */}
          <List style={[styles.drawerList]}>

            <ListItem
              onPress={() => {
                this.setState({ activeScreen: "LotteryScreen" });
                goPage(rootNavigator, "LotteryScreen", true, "fade", false, true)
              }}
              style={[styles.drawerItem, this.getActiveStyle("LotteryScreen")]}
            >
              <Body style={styles.drawerItemBody}>
                <Text note style={styles.drawerText}>
                  Chance To Party
                </Text>
              </Body>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                this.setState({ activeScreen: "GainsScreen" });
                goPage(rootNavigator, "GainsScreen", true, "fade", false, true)
              }}
              style={[styles.drawerItem, this.getActiveStyle("GainsScreen")]}
            >
              <Body style={styles.drawerItemBody}>
                <Text note style={styles.drawerText}>
                  Extra Gains
                </Text>
              </Body>
            </ListItem>
            <ListItem
              
              onPress={() =>
                goPage(rootNavigator, "LoginScreen", true, "fade", true, true)
              }
              style={[styles.drawerItem, this.getActiveStyle("LotteryScreen")]}
            >
              <Body style={styles.drawerItemBody}>
                <Text note style={styles.drawerText}>
                  Log Out
                </Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
DrawerLeft.propTypes = {
  navigator: PropTypes.navigator
};
