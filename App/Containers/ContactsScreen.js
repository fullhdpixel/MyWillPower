//Default libraries
import React, { Component } from "react";
import {
  Alert,
  Modal,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions
} from "react-native";
//Theme Definitions
import { Colors, Images } from "../Themes";
//Styles
import stylesCommon from "./Styles/StylesCommon";
import styles from "./Styles/ContactsStyles";
//Icons
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import {
  Thumbnail,
  Header,
  Icon,
  Body,
  Title,
  Subtitle,
  Button,
  Text,
  Left,
  Right,
  Container,
  Content,
  List,
  ListItem,
  CheckBox,
  Item,
  Input,
  Card,
  CardItem,
  Row,
  Col
} from "native-base";

import {
  goProfile,
  toggleDrawer,
  saveActiveScreen
} from "../Navigation/screens";

export default class ContactsScreen extends Component {
  constructor(props) {
    super(props);

    //Enable Drawer
    this.props.navigator.setDrawerEnabled({
      side: "left",
      enabled: true
    });

    saveActiveScreen("ContactsScreen");

    this.state = {
      user1: true,
      user2: true,
      user3: false,
      user4: false,
      user5: true,
      user6: false,
      user7: false,
      modalOpen: false //Is modal initially open or closed
    };
  }

  //Toggle Modal
  toggleModal(open) {
    // if (this.state.modalOpen) {
    // Alert.alert("gonna close now");
    this.setState({ modalOpen: open });
    // }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Modal visible={this.state.modalOpen} transparent>
          <Content
            contentContainerStyle={{
              backgroundColor: "#333333",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableWithoutFeedback onPress={() => this.toggleModal(false)}>
              <Card
                style={{
                  backgroundColor: "#333",
                  borderColor: "transparent"
                }}
              >
                <CardItem style={{backgroundColor: "#1D1D1D"}}>
                  <Text style={{color: Colors.white}}>Rosa Mathhews</Text>
                </CardItem>
                <CardItem
                  cardBody
                  style={{
                    backgroundColor: "transparent"
                  }}
                >
                  <Image
                    source={Images.head1}
                    style={{
                      width: Dimensions.get("window").width,
                      height: Dimensions.get("window").width / 2 + 90,
                      flex: 1,
                      resizeMode: "contain"
                    }}
                  />
                </CardItem>
                <CardItem style={styles.actionRow}>
                  <Button small light style={styles.messageButton}>
                    <SimpleLineIcons name="bubble" />
                    <Text style={styles.buttonActionText}>Message</Text>
                  </Button>
                  <Button small light style={styles.followButton}>
                    <SimpleLineIcons name="check" />
                    <Text style={styles.buttonActionText}>Follow</Text>
                  </Button>
                </CardItem>
                <CardItem style={styles.statsRow}>
                  <Row>
                    <Col>
                      <Text style={styles.statsText}>342</Text>
                      <Text note style={styles.statsTextNote}>
                        Posts
                      </Text>
                    </Col>
                    <Col>
                      <Text style={styles.statsText}>123</Text>
                      <Text note style={styles.statsTextNote}>
                        Subscribers
                      </Text>
                    </Col>
                    <Col>
                      <Text style={styles.statsText}>424</Text>
                      <Text note style={styles.statsTextNote}>
                        Likes
                      </Text>
                    </Col>
                  </Row>
                </CardItem>
              </Card>
            </TouchableWithoutFeedback>
          </Content>
        </Modal>
        <Header style={stylesCommon.header} searchBar>
          <Left>
            <Button transparent onPress={() => toggleDrawer()}>
              <Icon style={stylesCommon.primary} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Contacts</Title>
            <Subtitle>7 Contacts</Subtitle>
          </Body>
          <Right>
            <Button transparent onPress={() => goProfile()}>
              <Thumbnail small source={Images.user8} />
            </Button>
          </Right>
        </Header>
        <Header searchBar rounded style={styles.searchContainer}>
          <Item style={styles.searchbar}>
            <Icon name="search" />
            <Input placeholder="Search" />
            <Icon active name="people" />
          </Item>
        </Header>
        <Content padder style={styles.content}>
          <List style={styles.list}>
            <ListItem
              onPress={() => this.toggleModal(true)}
              style={styles.contactItem}
            >
              <Thumbnail
                square
                style={styles.thumbnail}
                source={Images.user1}
              />
              <Body>
                <Text>Jessie Jennings</Text>
              </Body>
              <Right>
                <CheckBox
                  checked={this.state.user1}
                  color={Colors.primary}
                  style={styles.checkbox}
                  onPress={() =>
                    this.setState({
                      user1: !this.state.user1
                    })
                  }
                />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => this.toggleModal(true)}
              style={styles.contactItem}
            >
              <Thumbnail
                square
                style={styles.thumbnail}
                source={Images.user2}
              />
              <Body>
                <Text>Phillip Burns</Text>
              </Body>
              <Right>
                <CheckBox
                  checked={this.state.user2}
                  color={Colors.primary}
                  style={styles.checkbox}
                  onPress={() =>
                    this.setState({
                      user2: !this.state.user2
                    })
                  }
                />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => this.toggleModal(true)}
              style={styles.contactItem}
            >
              <Thumbnail
                square
                style={styles.thumbnail}
                source={Images.user3}
              />
              <Body>
                <Text>Rosa Matthews</Text>
              </Body>
              <Right>
                <CheckBox
                  checked={this.state.user3}
                  color={Colors.primary}
                  style={styles.checkbox}
                  onPress={() =>
                    this.setState({
                      user3: !this.state.user3
                    })
                  }
                />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => this.toggleModal(true)}
              style={styles.contactItem}
            >
              <Thumbnail
                square
                style={styles.thumbnail}
                source={Images.user4}
              />
              <Body>
                <Text>Cathy Banks</Text>
              </Body>
              <Right>
                <CheckBox
                  checked={this.state.user4}
                  color={Colors.primary}
                  style={styles.checkbox}
                  onPress={() =>
                    this.setState({
                      user4: !this.state.user4
                    })
                  }
                />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => this.toggleModal(true)}
              style={styles.contactItem}
            >
              <Thumbnail
                square
                style={styles.thumbnail}
                source={Images.user5}
              />
              <Body>
                <Text>Judith Douglas</Text>
              </Body>
              <Right>
                <CheckBox
                  checked={this.state.user5}
                  color={Colors.primary}
                  style={styles.checkbox}
                  onPress={() =>
                    this.setState({
                      user5: !this.state.user5
                    })
                  }
                />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => this.toggleModal(true)}
              style={styles.contactItem}
            >
              <Thumbnail
                square
                style={styles.thumbnail}
                source={Images.user6}
              />
              <Body>
                <Text>Katrina Peters</Text>
              </Body>
              <Right>
                <CheckBox
                  checked={this.state.user6}
                  color={Colors.primary}
                  style={styles.checkbox}
                  onPress={() =>
                    this.setState({
                      user6: !this.state.user6
                    })
                  }
                />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => this.toggleModal(true)}
              style={styles.contactItem}
            >
              <Thumbnail
                square
                style={styles.thumbnail}
                source={Images.user7}
              />
              <Body>
                <Text>Minnie Wallace</Text>
              </Body>
              <Right>
                <CheckBox
                  checked={this.state.user7}
                  color={Colors.primary}
                  style={styles.checkbox}
                  onPress={() =>
                    this.setState({
                      user7: !this.state.user7
                    })
                  }
                />
              </Right>
            </ListItem>
          </List>
        </Content>
        <Button style={styles.nextButton}>
          <SimpleLineIcons name="arrow-right" style={styles.nextButtonIcon} />
        </Button>
      </Container>
    );
  }
}
