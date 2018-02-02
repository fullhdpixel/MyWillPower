//Default libraries
import React, { Component } from "react";
import { Alert, View, Image, TouchableOpacity } from "react-native";
import { goPage } from "app/Navigation/screens";
//Theme Definitions
import { Images } from "app/Themes";
//Styles
import styles from "app/Navigation/Styles/DrawerLeftStyles";
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
      activeScreen: "FeedScreen"
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
          colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0)"]}
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
              <Thumbnail source={Images.user7} />
              <Badge style={[styles.userBadge, stylesCommon.shadow]} />
              <Text style={styles.userBadgeText}>3</Text>
            </Left>
            <Body style={styles.userInfoView}>
              <View style={stylesCommon.horizontal}>
                <Text note style={[stylesCommon.fontBold, styles.username]}>
                  Jackie Wilson
                </Text>
                <MaterialIcons
                  name="verified-user"
                  style={styles.userVerified}
                />
              </View>
              <Text style={styles.userhandle}>@jwilson</Text>
            </Body>
          </CardItem>
        {/* User profile stats */}
        <CardItem style={[stylesCommon.shadow, styles.userStats]}>
          <Body style={stylesCommon.horizontal}>
            <Text style={[styles.userStatsText, stylesCommon.fontBold]}>
              177
            </Text>
            <Text note style={styles.statsexplanation}>
              Following
            </Text>
            <Text style={[styles.userStatsText, stylesCommon.fontBold]}>
              488
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
              icon
              onPress={() =>
                goPage(rootNavigator, "FeedScreen", true, "fade", false, true)
              }
              style={[styles.drawerItem, this.getActiveStyle("FeedScreen")]}
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
            <ListItem
              icon
              onPress={() =>
                goPage(rootNavigator, "ChatScreen", true, "fade", false, true)
              }
              style={[styles.drawerItem, this.getActiveStyle("ChatScreen")]}
            >
              <Left>
                <Icon name="ios-chatboxes-outline" style={styles.drawerIcon} />
              </Left>
              <Body style={styles.drawerItemBody}>
                <Text note style={styles.drawerText}>
                  Chat
                </Text>
              </Body>
              <Left>
                <Badge style={styles.drawerItemBadge}>
                  <Text>71</Text>
                </Badge>
              </Left>
            </ListItem>
            <ListItem
              icon
              onPress={() =>
                goPage(
                  rootNavigator,
                  "ProfileScreen",
                  true,
                  "slide-horizontal",
                  false,
                  true
                )
              }
              style={[styles.drawerItem, this.getActiveStyle("ProfileScreen")]}
            >
              <Left>
                <Icon name="ios-contact-outline" style={styles.drawerIcon} />
              </Left>
              <Body style={[styles.drawerItemBody]}>
                <Text note style={styles.drawerText}>
                  Profile
                </Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              onPress={() =>
                goPage(
                  rootNavigator,
                  "GalleryScreen",
                  true,
                  "fade",
                  false,
                  true
                )
              }
              style={[styles.drawerItem, this.getActiveStyle("GalleryScreen")]}
            >
              <Left>
                <Icon name="images" style={[styles.drawerIcon]} />
              </Left>
              <Body style={styles.drawerItemBody}>
                <Text note style={styles.drawerText}>
                  Gallery
                </Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              onPress={() =>
                goPage(rootNavigator, "MapScreen", true, "fade", false, true)
              }
              style={[styles.drawerItem, this.getActiveStyle("MapScreen")]}
            >
              <Left>
                <Icon name="ios-map-outline" style={styles.drawerIcon} />
              </Left>
              <Body style={styles.drawerItemBody}>
                <Text note style={styles.drawerText}>
                  Map
                </Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              button
              onPress={() =>
                goPage(rootNavigator, "ChartsScreen", true, "fade", false, true)
              }
              style={[styles.drawerItem, this.getActiveStyle("ChartsScreen")]}
            >
              <Left>
                <Icon name="ios-stats-outline" style={styles.drawerIcon} />
              </Left>
              <Body style={styles.drawerItemBody}>
                <Text note style={styles.drawerText}>
                  Charts
                </Text>
              </Body>
              <Left>
                <Icon name="arrow-down" style={{ color: "grey" }} />
              </Left>
            </ListItem>
            <ListItem
              icon
              onPress={() =>
                goPage(
                  rootNavigator,
                  "ContactsScreen",
                  true,
                  "fade",
                  false,
                  true
                )
              }
              style={[styles.drawerItem, this.getActiveStyle("ContactsScreen")]}
            >
              <Left>
                <Icon name="ios-contacts-outline" style={styles.drawerIcon} />
              </Left>
              <Body style={styles.drawerItemBody}>
                <Text note style={styles.drawerText}>
                  Contacts
                </Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        <Footer style={styles.footer}>
          <TouchableOpacity
            onPress={() =>
              goPage(rootNavigator, "LoginScreen", true, "fade", true, true)
            }
            style={styles.footerAction}
          >
            <Icon name="log-out" style={stylesCommon.alignCenter} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              goPage(
                rootNavigator,
                "SettingsScreen",
                true,
                "slide-horizontal",
                false,
                true
              )
            }
            style={styles.footerAction}
          >
            <Icon
              name="ios-settings-outline"
              style={stylesCommon.alignCenter}
            />
          </TouchableOpacity>
        </Footer>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
DrawerLeft.propTypes = {
  navigator: PropTypes.navigator
};
