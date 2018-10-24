import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Footer, FooterTab, Button, Icon } from "native-base";
// import { TabNavigator } from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SearchTab from "./tabNavigator/SearchTab";
import FavouriteTab from "./tabNavigator/FavouritesTab";


const SearchTabNavigator = createBottomTabNavigator({
  SearchTab: { screen: SearchTab },
  FavouriteTab: { screen: FavouriteTab }
},  {
  tabBarPosition: "bottom",
  tabBarComponent: props => {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            // active={props.navgationState.index === 0}

            onPress={() => {
              props.navigation.navigate("SearchTab")
              
            }}
          >
            <Icon name="beer" />
            <Text>Search</Text>
          </Button>

          <Button
            vertical
            // active={navgationState.index === 1}
            onPress={() => props.navigation.navigate("FavouritesTab")}
          >
            <Icon name="star" type="Feather" />
            <Text>Favourites</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
});

export default SearchTabNavigator;
