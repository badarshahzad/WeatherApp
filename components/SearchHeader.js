import React from "react";
import { Header, Item, Icon, Input } from "native-base";
export default class SearchHeader extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Header
        style={{ height: 40, justifyContent: "center", alignItems: "center" }}
        searchBar
        rounded
      >
        <Input
          style={{ backgroundColor: "white" }}
          placeholder={"Enter city name"}
          onChangeText={this.props.onChangeText}
          returnKeyType="search"
          onSubmitEditing={this.props.citySearch}
        />
        <Icon ios="ios-search" android="md-search" />
      </Header>
    );
  }
}
