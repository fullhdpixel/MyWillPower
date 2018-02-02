//Default libraries
import React, { Component } from "react";
//Theme Definitions
import { Colors } from "app/Themes";
//Styles
import stylesCommon from "app/Containers/Styles/StylesCommon";
import styles from "app/Containers/Styles/ResetPasswordScreenStyles";
//Navigator
import { goPage, enableDrawers } from "app/Navigation/screens";

import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Form,
  Item,
  Input
} from "native-base";

export default class TacScreen extends Component {
  constructor(props) {
    super(props);

    enableDrawers(this.props.navigator, false); //Disable drawers
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={stylesCommon.header}>
          <Left>
            <Button
              transparent
              onPress={() =>
                goPage(
                  this.props.navigator,
                  "LoginScreen",
                  true,
                  "slide-horizontal",
                  true
                )
              }
            >
              <Icon style={{ color: Colors.primary }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={stylesCommon.title}>Reset Password</Text>
          </Body>
          <Right />
        </Header>

        <Content style={styles.content}>
          {/* Register Form */}
          <Form style={styles.form}>
            <Item regular style={[styles.row, stylesCommon.noBorder]}>
              <Text>
                No Problem! Just fill in your email or username and we will send
                you a link to reset your password
              </Text>
            </Item>
            <Item regular style={styles.item}>
              <Input placeholder="Email Address" />
            </Item>
            <Item regular style={[styles.row, stylesCommon.noBorder]}>
              <Button
                style={styles.nextButton}
                onPress={() =>
                  goPage(
                    this.props.navigator,
                    "LoginScreen",
                    true,
                    "slide-horizontal",
                    true
                  )
                }
                block
              >
                <Text>Send Link</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
TacScreen.propTypes = {
  navigator: PropTypes.navigator
};
