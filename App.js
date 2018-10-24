import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from 'react-navigation';
import  HomeScreen  from "./components/Home/HomeScreen";
import SearchTabNavigationScreen from './components/Search/SearchTabNavigationScreen';


const App = createStackNavigator({
  HomeScreen:{screen: HomeScreen},
  SearchScreen:{screen: SearchTabNavigationScreen}
},{
  initialRouteName:"HomeScreen"
})

export default App;