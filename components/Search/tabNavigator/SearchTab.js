import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { Button, Container, Content } from "native-base";
import SearchHeader from "../SearchHeader";

export default class SearchTab extends React.Component {
  render() {
    return (
      <Container>
        <SearchHeader />
        <Content />
      </Container>
    );
  }
}
