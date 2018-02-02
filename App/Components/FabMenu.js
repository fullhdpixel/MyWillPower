import React, { Component } from "react";
//Styles
import styles from "./Styles/AlertMessageStyles";
import stylesCommon from "../Containers/Styles/StylesCommon";
//Icons
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";

import { Colors } from "../Themes/";

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
  Drawer,
  Fab
} from "native-base";

export default class FabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fabState: false
    };
  }

  goOption = (routename) => {
    this.props.navigator.push({
      screen: "FruitApp." + routename,
      animated: true,
      animation: "fade",
      navigatorStyle: {
        navBarHidden: true
      },
      navigatorButtons: {}
    });
  };

  render() {
    return (
      <Fab
        active={this.state.fabState}
        direction="up"
        containerStyle={{}}
        style={stylesCommon.primaryBG}
        position="bottomRight"
        onPress={() =>
          this.setState(previousState => {
            return { fabState: !previousState.fabState };
          })
        }
      >
        <Feather name="plus" />
        <Button
          style={{ backgroundColor: Colors.primary }}
          onPress={() => this.goOption("PostScreen")}
        >
          <Feather
            name="message-square"
            style={[styles.cameraIcon, stylesCommon.white]}
          />
        </Button>
        <Button
          style={{ backgroundColor: Colors.primary }}
          onPress={() => this.goOption("CameraScreen")}
        >
          <EvilIcons
            name="camera"
            style={[styles.messageIcon, stylesCommon.white]}
          />
        </Button>
      </Fab>
    );
  }
}
