//Default libraries
import React, { Component } from "react";
import { Modal } from "react-native";
//Theme Definitions
import { Colors, Images } from "app/Themes";
//Styles
import stylesCommon from "app/Containers/Styles/StylesCommon";
import styles from "app/Containers/Styles/GalleryStyles";

//Images carousel with zoom
import Gallery from "react-native-image-gallery";

import {
  Header,
  Icon,
  Body,
  Title,
  Button,
  Left,
  Right,
  Container,
  Content,
  Thumbnail
} from "native-base";

import {
  enableDrawers,
  goProfile,
  toggleDrawer,
  saveActiveScreen
} from "app/Navigation/screens";
import ImageGrid from "app/Components/ImageGrid";

export default class GalleryScreen extends Component {
  constructor(props) {
    super(props);

    saveActiveScreen("GalleryScreen");

    //Enable Drawer
    enableDrawers(this.props.navigator, true); //Enable Drawers

    this.state = {
      images: [
        Images.stock1,
        Images.stock2,
        Images.stock3,
        Images.stock4,
        Images.stock5,
        Images.stock6,
        Images.stock7,
        Images.stock8,
        Images.stock9,
        Images.stock10,
        Images.stock11,
        Images.stock12,
        Images.stock13,
        Images.stock14,
        Images.stock15,
        Images.stock16,
        Images.stock17,
        Images.stock18,
        Images.stock19,
        Images.stock20,
        Images.stock21,
        Images.stock22,
        Images.stock23,
        Images.stock24,
        Images.stock25,
        Images.stock26,
        Images.stock27,
        Images.stock28,
        Images.stock29,
        Images.stock30
      ],
      modalOpen: false, //Is modal initially open or closed
      imageIndex: 0 //Initial index of photo to show in modal
    };
  }

  //Toggle Modal
  toggleModal(open) {
    this.setState({ modalOpen: open });
  }

  //Sets index
  selectImage(index) {
    this.toggleModal(true);
    this.setState({ imageIndex: index });
  }

  render() {
    let images = this.state.images.map(image => {
      return { source: image };
    });

    return (
      <Container style={styles.container}>
        {/* Gallery modal */}
        <Modal visible={this.state.modalOpen} transparent>
          <Header style={{ backgroundColor: "rgba(0,0,0,0.75)" }}>
            <Right>
              <Button transparent onPress={() => this.toggleModal(false)}>
                <Icon
                  style={{ fontSize: 40, color: Colors.white }}
                  name="close"
                />
              </Button>
            </Right>
          </Header>
          <Gallery
            style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.75)" }}
            images={images}
            initialPage={this.state.imageIndex}
            onSingleTapConfirmed={() =>
              this.setState({ modalOpen: !this.state.modalOpen })
            }
          />
        </Modal>
        {/* Default view with image grid*/}
        <Header style={stylesCommon.header}>
          <Left>
            <Button transparent onPress={() => toggleDrawer()}>
              <Icon style={stylesCommon.primary} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Photos</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => goProfile()}>
              <Thumbnail small source={Images.user8} />
            </Button>
          </Right>
        </Header>
        <Content style={[styles.content]}>
          <ImageGrid
            selectImage={this.selectImage.bind(this)}
            images={this.state.images}
          />
        </Content>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
GalleryScreen.propTypes = {
  navigator: PropTypes.navigator
};
