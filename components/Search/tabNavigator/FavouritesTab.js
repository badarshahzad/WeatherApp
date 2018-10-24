import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { Button, Container, Content } from "native-base";

export default class FavouritesTab extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>Favourites</Text>
        </Content>
      </Container>
    );
  }
}
