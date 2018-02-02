//Default libraries
import React, { Component } from "react";
import { Animated, ScrollView, ImageBackground, Dimensions, View } from "react-native";
//Theme Definitions
import { Images } from "app/Themes";
import { retrieveStockImages } from "app/Themes/Images";
//Styles
import stylesCommon from "app/Containers/Styles/StylesCommon";
import styles from "app/Containers/Styles/ProfileStyles";
//Icons
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

import ImageGrid from "app/Components/ImageGrid";

import {
  Container,
  Thumbnail,
  Header,
  Body,
  Title,
  Button,
  Text,
  Left,
  Right,
  Grid,
  Col,
  Row,
  Icon
} from "native-base";
import {
  goPage,
  enableDrawers,
  saveActiveScreen
} from "app/Navigation/screens";

import ParallaxHeader from "parallax-header";
import ProfileTabs from "app/Components/ProfileTabs";

import { TabViewAnimated, TabBar } from "react-native-tab-view";

//CONSTANTS
const window = Dimensions.get("window");
// const HEADER_HEIGHT = window.height / 2 - 50;
const HEADER_HEIGHT = 240;

const COLLAPSED_HEIGHT = 52; //+ Constants.statusBarHeight;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;

const initialLayout = {
  height: 0,
  width: window.width
};

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    saveActiveScreen("ProfileScreen");

    enableDrawers(this.props.navigator, false); //Disable Drawer

    this.state = {
      images: retrieveStockImages(),
      index: 0,
      scroll: new Animated.Value(0),
      routes: [
        {
          key: "1",
          icon: (
            <MaterialCommunityIcons name="view-grid" style={{ fontSize: 30 }} />
          )
        },
        {
          key: "2",
          icon: (
            <MaterialIcons
              name="format-list-bulleted"
              style={{ fontSize: 30 }}
            />
          )
        },
        {
          key: "3",
          icon: <MaterialIcons name="location-on" style={{ fontSize: 30 }} />
        },
        {
          key: "4",
          icon: (
            <MaterialCommunityIcons
              name="clipboard-account"
              style={{ fontSize: 30 }}
            />
          )
        }
      ]
    };
  }

  _handleIndexChange = index =>
    this.setState({
      index
    });

  _renderIcon = ({ route }) => {
    return route.icon;
  };

  _renderHeader = props => {
    const translateY = this.state.scroll.interpolate({
      inputRange: [0, SCROLLABLE_HEIGHT],
      outputRange: [0, -SCROLLABLE_HEIGHT],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <ImageBackground
          source={{ uri: 'https://picsum.photos/900' }}
          style={styles.cover}>
          <View style={styles.overlay} />
          <TabBar {...props} style={styles.tabBar}
            renderIcon={this._renderIcon} indicatorStyle={styles.indicator} />
        </ImageBackground>
      </Animated.View>

      // <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
      //   <ImageBackground
      //     source={Images.profile}
      //     style={styles.cover}>
      //     <View style={styles.overlay} />
      //     <TabBar  {...props}
      //       indicatorStyle={styles.indicator}
      //       renderIcon={this._renderIcon}
      //       style={styles.tabBar} />
      //   </ImageBackground>
      // </Animated.View>
    );
  };

  //Sets index
  selectImage(index) {
    // this.toggleModal(true);
    // this.setState({ imageIndex: index });
  }

  _renderScene = ({ route }) => {
    switch (route.key) {
      case "1":
        return (
          <ImageGrid
            selectImage={this.selectImage.bind(this)}
            images={this.state.images}
            style={{}}
          />
        );
      case "2":
        return <ProfileTabs images={this.state.images} />;
      case "3":
        return <View style={{ backgroundColor: "#f5f5f5" }} />;
      case "4":
        return (
          <ScrollView >

            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                backgroundColor: "transparent",
                borderColor: "#272727",
                borderWidth: 3,
                top: 30,
                width: 100,
                height: 100,
                borderRadius: 100 / 2
              }}
            />
            <MaterialCommunityIcons
              name="clipboard-account"
              style={{
                color: "#272727",
                backgroundColor: "transparent",
                alignSelf: "center",
                top: 45,
                fontSize: 70
              }}
            />
            <View style={{ justifyContent: "center", height: 225 }}>
              <Text style={{ color: "#272727", fontSize: 28, textAlign: "center" }}>
                Photos of You
              </Text>

              <Text style={{ color: "#272727", textAlign: "center", top: 15, width: "90%", left: "5%" }}>
                When people tag you in photos, they'll appear here
              </Text>
            </View>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  renderNavBar() {
    return (
      <Header style={{ backgroundColor: "transparent" }}>
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
          <Title style={{ color: "white" }}>Profile</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => Alert.alert("Not implemented")}>
            <EvilIcons
              name="pencil"
              style={[stylesCommon.icon, { color: "white" }]}
            />
          </Button>
        </Right>
      </Header>
    );
  }

  renderCustomView() {
    return (
      <View style={styles.customView}>
        <View style={styles.profileDarken} />
        <View style={{ top: 10 }}>
          <Thumbnail
            large
            source={Images.user8}
            style={stylesCommon.alignCenter}
          />
          <Text style={styles.username}>Jackie Wilson</Text>
          <Text style={styles.userDescription}>
            Just a girl and her camera. Nature, animals, food
        </Text>
          <Grid style={styles.statsGrid}>
            <Col style={styles.statsCol}>
              <Text style={styles.statsNumber}>168</Text>
              <Text note style={styles.statsDescription}>
                Posts
            </Text>
            </Col>
            <Col style={styles.statsCol}>
              <Text style={styles.statsNumber}>217</Text>
              <Text note style={styles.statsDescription}>
                Followers
            </Text>
            </Col>
            <Col style={styles.statsCol}>
              <Text style={styles.statsNumber}>182</Text>
              <Text note style={styles.statsDescription}>
                Following
            </Text>
            </Col>
          </Grid>
        </View>
      </View>
    );
  }

  // Inside of a component's render() method:
  render() {
    return (
      <Container style={styles.container}>

        <TabViewAnimated
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
          useNativeDriver
        />

        {/* <ParallaxHeader
          headerMinHeight={0}
          headerMaxHeight={PARALLAX_HEADER_HEIGHT}
          extraScrollHeight={200}
          navbarColor={"black"}
          backgroundImage={Images.profile}
          backgroundImageScale={1.5}
          renderNavBar={this.renderNavBar.bind(this)}
          renderContent={this.renderContent.bind(this)}
          renderCustomView={this.renderCustomView.bind(this)}
          scrollEventThrottle={1}
        /> */}
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
ProfileScreen.propTypes = {
  navigator: PropTypes.navigator
};