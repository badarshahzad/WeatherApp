import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { StackNavigator } from "react-navigation";
import { Button } from "native-base";

export default class HomeScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Button block={true}

        onPress={() => this.props.navigation.navigate("SearchScreen")}>
          <Text style={{color:'black'}}>Search City Weather</Text>
        </Button>
      </View>
    );
  }
}

//final  = const
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
