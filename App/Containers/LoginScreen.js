//Default libraries
import React, { Component } from "react";
import { StatusBar, Image } from "react-native";
//Theme Definitions
import { Images, Colors } from "app/Themes";
//Styles
import stylesCommon from "app/Containers/Styles/StylesCommon";
import styles from "app/Containers/Styles/LoginStyles";
//Icons
import EvilIcons from "react-native-vector-icons/EvilIcons";
//LinearGradient
import LinearGradient from "react-native-linear-gradient";
//Components
import Hr from "react-native-hr-plus";
//Navigator
import { goPage, enableDrawers } from "app/Navigation/screens";

import {
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

export let rootNavigator = null;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    rootNavigator = this.props.navigator;
    enableDrawers(rootNavigator, false); //Disable Drawers
  }

  loginFacebook() {
    goPage(
      rootNavigator,
      "LotteryScreen",
      true,
      "fade"
    )
  }

  render() {
    return (
      <Container>
        <Text>MyWillPower</Text>
        {/*<Image source={Images.stock1} style={styles.image} />*/}
        <LinearGradient
          colors={["#cfc469", "#f19e1f", "#d02c52"]}
          style={styles.linearGradient}
        />
        <Content padder style={stylesCommon.content}>
          <Row style={stylesCommon.imageHolder}>
            <Image style={styles.logo} source={Images.logo} />
          </Row>
        </Content>
        <Button
          block
          style={styles.facebookButton}
          onPress={this.loginFacebook.bind()}>
          <EvilIcons name="sc-facebook" style={styles.scicon} />
          <Text style={[stylesCommon.font]} uppercase={false}>
            Login with Facebook
          </Text>
        </Button>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
LoginScreen.propTypes = {
  navigator: PropTypes.navigator
};
