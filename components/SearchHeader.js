import React from "react";
import { Header, Item, Icon, Input } from "native-base";
export default class SearchHeader extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Header
        style={{ justifyContent: "center", alignItems: "center", marginBottom:16,
       backgroundColor:'#fefefe'  }}
        searchBar
        rounded
      >

        <Item>
            <Icon active name="search" />
            <Input placeholder="Search your city weather" 
            onChangeText={this.props.onChangeText}
            returnKeyType="search"
                      onSubmitEditing={this.props.citySearch}/>
          </Item>
        
        {/* <Icon ios="ios-search" android="md-search" /> */}
      </Header>
    );
  }
}
