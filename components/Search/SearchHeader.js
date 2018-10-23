import React from "react";
import { Header, Item, Icon, Input } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Header style={{ height: 80 }} searchBar rounder>
        <Input />
        <Icon ios="ios-search" android="md-search" />
      </Header>
    );
  }
}
