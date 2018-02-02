//Default libraries
import React, { Component } from "react";
import { StatusBar } from "react-native";
//Styles
import stylesCommon from "./Styles/StylesCommon";
import styles from "./Styles/NotificationStyles";

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
  Separator
} from "native-base";
//Icons
import Feather from "react-native-vector-icons/Feather";
//Images dictionary
import { Images } from "app/Themes";
//Specific Screen Components
import NotificationBadge from "app/Components/NotificationBadge";

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={stylesCommon.header}>
          <Left />
          <Body>
            <Title>Notifications</Title>
          </Body>
          <Right />
        </Header>
        <StatusBar barStyle="dark-content" />
        <Content style={styles.content}>
          <Separator bordered>
            <Text>TODAY</Text>
          </Separator>
          <List>
            <ListItem style={styles.notificationItem}>
              <Thumbnail source={Images.user8} />
              <NotificationBadge icon="like" color="#e14a6f" />
              <Body>
                <Text>
                  Trevor Roges <Text note>Likes your photo</Text>
                </Text>

                <Text note>2m ago</Text>
              </Body>
              <Thumbnail
                square
                source={Images.stock1}
                style={{ borderRadius: 5 }}
              />
            </ListItem>
            <ListItem style={styles.notificationItem}>
              <Thumbnail source={Images.user2} />
              <NotificationBadge icon="comment" color="#393190" />
              <Body>
                <Text>
                  Colleen Henry <Text note>Commented on your photo:</Text>
                  <Text note style={{ fontStyle: "italic" }}>
                    "Fabulous!"
                  </Text>
                </Text>

                <Text note>5m ago</Text>
              </Body>
              <Thumbnail
                square
                source={Images.stock2}
                style={{ borderRadius: 5 }}
              />
            </ListItem>
            <ListItem style={styles.notificationItem}>
              <Thumbnail source={Images.user3} />
              <NotificationBadge icon="check" color="#38b987" />
              <Body>
                <Text>
                  Zoey Horton <Text note>Tagged you in a video</Text>
                </Text>
              </Body>
              <Thumbnail
                square
                source={Images.stock3}
                style={{ borderRadius: 5 }}
              />
            </ListItem>
            <ListItem style={styles.notificationItem}>
              <Thumbnail source={Images.user4} />
              <NotificationBadge icon="like" color="#e14a6f" />
              <Body>
                <Text>
                  Kristen Rodriquez <Text note>Likes your status</Text>
                </Text>
                <Text note>21 min ago</Text>
              </Body>
              <Thumbnail
                square
                source={Images.stock4}
                style={{ borderRadius: 5 }}
              />
            </ListItem>
            <ListItem style={styles.notificationItem}>
              <Thumbnail source={Images.user5} />
              <NotificationBadge icon="user" color="#38b987" />
              <Body>
                <Text>
                  Marlene Bailey <Text note>Wants to be your friend</Text>
                </Text>
                <Text note>14 min ago</Text>
              </Body>
            </ListItem>
          </List>

          <Separator bordered>
            <Text>YESTERDAY</Text>
          </Separator>
          <List>
            <ListItem style={styles.notificationItem}>
              <Thumbnail source={Images.user6} />
              <NotificationBadge icon="user" color="#38b987" />
              <Body>
                <Text>
                  Kristina Mendoza <Text note>Wants to be your friend</Text>
                </Text>
                <Text note>1 day ago</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.notificationItem}>
              <Thumbnail source={Images.user7} />
              <NotificationBadge icon="like" color="#e14a6f" />

              <Body>
                <Text>
                  Jeanne Neal <Text note>Likes your photo</Text>
                </Text>

                <Text note>3 days ago</Text>
              </Body>
              <Thumbnail
                square
                source={Images.stock9}
                style={{ borderRadius: 5 }}
              />
            </ListItem>
            <ListItem style={styles.notificationItem}>
              <Thumbnail source={Images.user8} />
              <NotificationBadge icon="user" color="#38b987" />
              <Body>
                <Text>
                  Joy Vargas <Text note>Wants to be your friend</Text>
                </Text>
                <Text note>4 days ago</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.notificationItem}>
              <Thumbnail source={Images.user2} />
              <NotificationBadge icon="comment" color="#393190" />
              <Body>
                <Text>
                  Colleen Henry <Text note>Commented on your photo:</Text>
                  <Text note style={{ fontStyle: "italic" }}>
                    "Great!"
                  </Text>
                </Text>

                <Text note>5 days ago</Text>
              </Body>
              <Thumbnail
                square
                source={Images.stock5}
                style={{ borderRadius: 5 }}
              />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
NotificationScreen.propTypes = {
  navigator: PropTypes.navigator
};
