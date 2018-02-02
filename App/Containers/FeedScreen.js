//Default libraries
import React, { Component } from "react";
import { ScrollView, View, StatusBar, Alert, Image } from "react-native";
//Styles
import stylesCommon from "app/Containers/Styles/StylesCommon";
import styles from "app/Containers/Styles/FeedStyles";
//Icons
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
//Specific Screen Components
import FeedItem from "app/Components/FeedItem";
import FabMenu from "app/Components/FabMenu";
//Theme Definitions
import { Colors, Images } from "app/Themes";
//Navigator
import { enableDrawers, toggleDrawer, saveActiveScreen } from "app/Navigation/screens";
//Gradient
import LinearGradient from "react-native-linear-gradient";

import {
  Title,
  Footer,
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Fab,
  Card,
  CardItem,
  Thumbnail,
  Badge,
  List,
  ListItem
} from "native-base";

export default class FeedScreen extends Component {
  constructor(props) {
    super(props);

    //Enable Drawer
    enableDrawers(this.props.navigator, true)

    saveActiveScreen("FeedScreen");
  }

  render() {
    let feed = [
      {
        id: 1,
        name: "Travis Torres",
        city: "New York, NY",
        text:
          "Is city life moving too fast? Take a moment to relax before you do anything rash. Don't you want to know me? Be a friend of mine. I'll share some wisdom with you. Don't you ever get lonely from time to time. Don't let the system get you down",
        profileImg: Images.user1,
        mainImg: Images.statusImgTwo,
        likes: 3,
        comments: 0,
        timestamp: "10m"
      },
      {
        id: 2,
        name: "Lester Harrison",
        city: "San Francisco, CA",
        text: "Enjoying the company of my pupper Max.",
        profileImg: Images.user2,
        mainImg: Images.statusImgOne,
        likes: 32,
        comments: 13,
        timestamp: "5m"
      },
      {
        id: 3,
        name: "Rose Rhodes",
        city: "Bellingham, Washington",
        text:
          "I wish you a wonderful year full of love, happiness and success.",
        profileImg: Images.user3,
        mainImg: Images.statusImgThree,
        likes: 5,
        comments: 1,
        timestamp: "15m"
      }
    ];

    let feedItems = feed.map(data => {
      return <FeedItem key={data.id} data={data} />;
    });

    return (
      <Container style={styles.container}>
        <Header style={stylesCommon.header}>
          <Left>
            <Button transparent onPress={() => toggleDrawer()}>
              <Icon style={{ color: Colors.primary }} name="ios-menu-outline" />
            </Button>
          </Left>
          <Body>
            <Title style={stylesCommon.title}>Feed</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => toggleDrawer("open", "right")}>
              <Badge info style={{ position: "absolute" }}>
                <Text>2</Text>
              </Badge>
              <EvilIcons active name="bell" style={[stylesCommon.icon]} />
            </Button>
          </Right>
        </Header>
        <StatusBar barStyle="dark-content" />
        <Content>
          {/* Featured */}
          <List style={styles.list}>
            <ListItem icon last style={styles.featured}>
              <Left>
                <Text note style={styles.featuredText}>
                  RECENT STORIES (8)
                </Text>
              </Left>
              <Body />
              <Right>
                <Text note style={styles.featuredText}>
                  Watch All
                </Text>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
          {/* Recommended users */}
          <ScrollView
            horizontal
            contentContainerStyle={styles.recommendedUsersRow}
          >
            <View style={styles.userContainer}>
              <LinearGradient
                colors={["#da307f", "#e4465e", "#f7803a"]}
                style={styles.userCircle}
              >
                <Thumbnail large style={styles.userImg} source={Images.user1} />
              </LinearGradient>
              <Text style={styles.username}>JESSIE J.</Text>
              <Text note style={styles.timestamp}>
                1 HOUR AGO
              </Text>
            </View>
            <View style={styles.userContainer}>
              <LinearGradient
                colors={["#da307f", "#e4465e", "#f7803a"]}
                style={styles.userCircle}
              >
                <Thumbnail large style={styles.userImg} source={Images.user2} />
              </LinearGradient>
              <Text style={styles.username}>PHILIP H.</Text>
              <Text note style={styles.timestamp}>
                42 MIN. AGO
              </Text>
            </View>
            <View style={styles.userContainer}>
              <LinearGradient
                colors={["#da307f", "#e4465e", "#f7803a"]}
                style={styles.userCircle}
              >
                <Thumbnail large style={styles.userImg} source={Images.user3} />
              </LinearGradient>
              <Text style={styles.username}>ROSA P.</Text>
              <Text note style={styles.timestamp}>
                14 MIN. AGO
              </Text>
            </View>
          </ScrollView>
          {feedItems}
        </Content>
        {/* Pass props to FabMenu for Navigator */}
        <FabMenu {...this.props} />
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
FeedScreen.propTypes = {
  navigator: PropTypes.navigator
};
