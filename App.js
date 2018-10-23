import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {StackNavigator} from 'react-navigation';
import  HomeScreen  from "./components/Home/HomeScreen";
import SearchTabNavigationScreen from './components/Search/SearchTabNavigationScreen';


const App = StackNavigator({
  HomeScreen:{screen: HomeScreen},
  SearchScreen:{screen: SearchTabNavigationScreen}
},{
  initialRouteName:"HomeScreen"
})

export default App;