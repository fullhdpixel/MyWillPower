//Default libraries
import React, { Component } from "react";
import { ScrollView, View } from "react-native";
//Theme Definitions
import { Images } from "../Themes";
//Styles
import stylesCommon from "./Styles/StylesCommon";
import styles from "./Styles/ChatStyles";
//Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
  Container,
  Content,
  List,
  ListItem,
  Badge
} from "native-base";

import { enableDrawers, toggleDrawer, saveActiveScreen } from "app/Navigation/screens";

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);

    //Enable Drawer
    enableDrawers(this.props.navigator, true);

    saveActiveScreen("MapsScreen");
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={stylesCommon.header}>
          <Left>
            <Button transparent onPress={() => toggleDrawer()}>
              <Icon style={stylesCommon.primary} name="ios-menu-outline" />
            </Button>
          </Left>
          <Body>
            <Title style={stylesCommon.primary}>Chat</Title>
          </Body>
          <Right>
            <Button
              transparent
              // onPress={() => goProfile()}
            >
              <Icon style={stylesCommon.primary} name="ios-search" />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          {/* Featured */}
          <List style={styles.list}>
            <ListItem icon last style={styles.featured}>
              <Left>
                <Text note style={styles.featuredText}>
                  FEATURED, 385
                </Text>
              </Left>
              <Body />
              <Right>
                <Text note style={styles.featuredText}>
                  View All
                </Text>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
          {/* Chat circles */}
          <ScrollView horizontal contentContainerStyle={styles.chatCirclesRow}>
            <View style={[styles.chatCircle, styles.chatActive]}>
              <Thumbnail style={styles.userImg} source={Images.user1} />
            </View>
            <View style={[styles.chatCircle, styles.chatActive]}>
              <Thumbnail style={styles.userImg} source={Images.user2} />
            </View>
            <View style={[styles.chatCircle, styles.chatInactive]}>
              <Thumbnail style={styles.userImg} source={Images.user3} />
            </View>
            <View style={[styles.chatCircle, styles.chatInactive]}>
              <Thumbnail style={styles.userImg} source={Images.user4} />
            </View>
            <View style={[styles.chatCircle, styles.chatInactive]}>
              <Thumbnail style={styles.userImg} source={Images.user5} />
            </View>
            <View style={[styles.chatCircle, styles.chatInactive]}>
              <Thumbnail style={styles.userImg} source={Images.user6} />
            </View>
            <View style={[styles.chatCircle, styles.chatInactive]}>
              <Thumbnail style={styles.userImg} source={Images.user7} />
            </View>
            <View style={[styles.chatCircle, styles.chatInactive]}>
              <Thumbnail style={styles.userImg} source={Images.user8} />
            </View>
          </ScrollView>
          {/* Chat rows */}
          <List>
            <ListItem>
              <Thumbnail source={Images.user1} />
              <Body>
                <Text style={styles.username}>
                  <View style={[styles.statusBadge, styles.onlineBadge]} />
                  Alec Sanner
                </Text>
                <Text note style={styles.chatText}>
                  typing...
                </Text>
              </Body>
              <Right>
                <Text note style={styles.timestamp}>
                  03:30 PM
                </Text>
                <Badge style={styles.chatBadge}>
                  <Text>3</Text>
                </Badge>
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail source={Images.user2} />
              <Body>
                <Text style={styles.username}>
                  <View style={[styles.statusBadge, styles.offlineBadge]} />
                  Zackary Messana
                </Text>
                <Text note style={styles.chatText}>
                  Hey, can you help me? If you are not busy...
                </Text>
              </Body>
              <Right>
                <Text note style={styles.timestamp}>
                  03:21 PM
                </Text>
                <MaterialCommunityIcons
                  name="check-all"
                  style={styles.checkallIcon}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail source={Images.user3} />
              <Body>
                <Text style={styles.username}>
                  <View style={[styles.statusBadge, styles.offlineBadge]} />
                  Kristyn Clymer
                </Text>
                <Text note style={styles.chatText}>
                  Lol what's up?
                </Text>
              </Body>
              <Right>
                <Text note style={styles.timestamp}>
                  10:32 PM
                </Text>
                <MaterialCommunityIcons
                  name="check-all"
                  style={styles.checkallIcon}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail source={Images.user4} />
              <Body>
                <Text style={styles.username}>
                  <View style={[styles.statusBadge, styles.onlineBadge]} />
                  Miriam Quintero
                </Text>
                <Text note style={styles.chatText}>
                  I'm kinda bored. I know its weird asking you out online...
                </Text>
              </Body>
              <Right>
                <Text note style={styles.timestamp}>
                  02:21 AM
                </Text>
                <Badge style={styles.chatBadge}>
                  <Text>1</Text>
                </Badge>
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail source={Images.user5} />
              <Body>
                <Text style={styles.username}>
                  <View style={[styles.statusBadge, styles.onlineBadge]} />
                  Dreama Hakala
                </Text>
                <Text note style={styles.chatText}>
                  Alright sure, what do you want to do?
                </Text>
              </Body>
              <Right>
                <Text note style={styles.timestamp}>
                  11:12 PM
                </Text>
                <MaterialCommunityIcons
                  name="check-all"
                  style={styles.checkallIcon}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail source={Images.user6} />
              <Body>
                <Text style={styles.username}>
                  <View style={[styles.statusBadge, styles.onlineBadge]} />
                  Mei Northrup
                </Text>
                <Text note style={styles.chatText}>
                Hey, Im Mei and my friend Miriam and I were just browsing profiles and we found yours...
                </Text>
              </Body>
              <Right>
                <Text note style={styles.timestamp}>
                  01:11 PM
                </Text>
                <Badge style={styles.chatBadge}>
                  <Text>1</Text>
                </Badge>
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail source={Images.user7} />
              <Body>
                <Text style={styles.username}>
                  <View style={[styles.statusBadge, styles.offlineBadge]} />
                  Cordia Ver
                </Text>
                <Text note style={styles.chatText}>
                  Ps. if you're lucky we can hang out later tonight. 9PM?
                </Text>
              </Body>
              <Right>
                <Text note style={styles.timestamp}>
                  11:59 AM
                </Text>
                <MaterialCommunityIcons
                  name="check-all"
                  style={styles.checkallIcon}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail source={Images.user8} />
              <Body>
                <Text style={styles.username}>
                  <View style={[styles.statusBadge, styles.onlineBadge]} />
                  Terrie Rio
                </Text>
                <Text note style={styles.chatText}>
                  typing...
                </Text>
              </Body>
              <Right>
                <Text note style={styles.timestamp}>
                  05:24 PM
                </Text>
                <Badge style={styles.chatBadge}>
                  <Text>7</Text>
                </Badge>
              </Right>
            </ListItem>
            {/* Dont forget to add last */}
          </List>
        </Content>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
ChatScreen.propTypes = {
  navigator: PropTypes.navigator
};
