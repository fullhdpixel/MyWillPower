//Default libraries
import React, { Component } from "react";
//Styles
import stylesCommon from "app/Containers/Styles/StylesCommon";
import styles from "app/Containers/Styles/RegisterStyles";
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

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    enableDrawers(this.props.navigator, false); //Disable drawers
  }

  render() {
    return (
      <Container style={styles.container}>
        {/* Header Create Account */}
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
              <Icon style={stylesCommon.primary} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={stylesCommon.title}>Create Account</Text>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          {/* Register Form */}
          <Form style={styles.form}>
            <Item regular style={[styles.row, stylesCommon.noBorder]}>
              <Text>
                Fill in the form below and get started. All fields are
                mandatory
              </Text>
            </Item>
            <Item regular style={styles.item}>
              <Input placeholder="Email Address" />
            </Item>
            <Item regular style={styles.item}>
              <Input
                placeholder="Password"
                secureTextEntry={true}
              />
            </Item>
            <Item regular style={styles.item}>
              <Input
                placeholder="Confirm Password"
                secureTextEntry={true}
              />
            </Item>
            <Item regular style={[styles.row, stylesCommon.noBorder, {}]}>
              <Text>
                By creating an account, you are automatically accepting all the
                <Text note style={styles.tos}>
                  {" "}
                  Terms & Conditions{" "}
                </Text>
                related to PremiumReact
              </Text>
            </Item>
            <Item regular style={[styles.row, stylesCommon.noBorder]}>
              <Button
                style={styles.nextButton}
                onPress={() =>
                  goPage(this.props.navigator, "FeedScreen", true, "fade", true)
                }
                block
              >
                <Text>Continue</Text>
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
RegisterScreen.propTypes = {
  navigator: PropTypes.navigator
};
