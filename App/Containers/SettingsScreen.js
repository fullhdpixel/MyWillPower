//Default libraries
import React, { Component } from "react";
import { StatusBar } from "react-native";
//Styles
import stylesCommon from "./Styles/StylesCommon";
import styles from "./Styles/SettingsStyles";

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

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airplane: false,
      vibrate: true,
      private: false
    };

    saveActiveScreen("SettingScreen");

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
                  goPage(this.props.navigator, "FeedScreen", true, "fade", true)
                }
              >
                <Feather style={stylesCommon.headerIcon} name="chevron-left" />
              </Button>
            </Left>
            <Body>
              <Title>Settings</Title>
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
              <Text>General Settings</Text>
            </Separator>
            <List>
              <ListItem icon>
                <Left>
                  <Button danger>
                    <Ionicons name="ios-settings" style={styles.iosIcon} />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>App Settings</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                {/* Show relevant first? */}
                <Left>
                  <Button success>
                    <Ionicons name="md-notifications" style={styles.iosIcon} />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Notification Settings</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              {/* Optimize images to save data */}
              <ListItem icon>
                <Left>
                  <Button primary>
                    <MaterialIcons name="language" style={styles.iosIcon} />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Language</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon last>
                <Left>
                  <Button success>
                    <MaterialIcons
                      name="settings-applications"
                      style={styles.iosIcon}
                    />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Feed Preferences</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
            </List>
            <Separator bordered style={styles.seperator}>
              <Text>Account Settings</Text>
            </Separator>
            <List>
              {/* privacy settings */}
              <ListItem icon>
                <Left>
                  <Button danger>
                    <Ionicons
                      name="md-hand"
                      style={{ color: "white", fontSize: 22 }}
                    />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Privacy Settings</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              {/* allow saving */}
              <ListItem
                icon
                onPress={() =>
                  this.setState({ notifications: !this.state.notifications })
                }
              >
                <Left>
                  <Button primary>
                    <Ionicons name="ios-notifications" style={styles.iosIcon} />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Allow Saving</Text>
                </Body>
                <Right>
                  <Switch
                    value={this.state.notifications}
                    onValueChange={value =>
                      this.onChangeFunction({ notifications: value })
                    }
                  />
                </Right>
              </ListItem>
              {/* Block list */}
              {/* Delete Account */}
              <ListItem
                icon
                onPress={() => this.setState({ privacy: !this.state.privacy })}
              >
                <Left>
                  <Button warning>
                    <Icon name="md-lock" style={{ fontSize: 22 }} />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Make Posts Private</Text>
                </Body>
                <Right>
                  <Switch
                    value={this.state.privacy}
                    onValueChange={value =>
                      this.onChangeFunction({ privacy: value })
                    }
                  />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button success>
                    <Icon name="md-share" />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Share Settings</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button info>
                    <Icon name="ios-contacts" />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Contact Settings</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon last>
                <Left>
                  <Button success>
                    <Icon name="ios-cash" style={styles.iosIcon} />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Payment Settings</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
            </List>
            <Separator bordered style={styles.seperator}>
              <Text>MORE</Text>
            </Separator>
            <List>
              <ListItem icon>
                <Left>
                  <Button info>
                    <Ionicons name="md-help" style={styles.iosIcon} />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Help Center</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button danger>
                    <FontAwesome
                      name="exclamation-triangle"
                      style={styles.iosIcon}
                    />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Report a Problem</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button info>
                    <Icon name="md-list-box" style={styles.iosIcon} />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Terms and Policies</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button info>
                    <MaterialCommunityIcons
                      name="information-outline"
                      style={styles.iosIcon}
                    />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>About</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button light>
                    <MaterialCommunityIcons
                      name="logout-variant"
                      style={styles.iosIcon}
                    />
                  </Button>
                </Left>
                <Body>
                  <Text style={stylesCommon.font}>Logout</Text>
                </Body>
                <Right>
                  <Icon name="ios-forward-icon" />
                </Right>
              </ListItem>
            </List>
            <Text note style={[stylesCommon.font, styles.copyright]}>
              App created for sale on PremiumReact.com
            </Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
SettingsScreen.propTypes = {
  navigator: PropTypes.navigator
};
