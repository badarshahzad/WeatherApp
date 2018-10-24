import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { StackNavigator } from "react-navigation";
import { Button } from "native-base";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export  const weatherConditions = {
    Rain: {
      color: '#005BEA',
      title: 'Raining',
      subtitle: 'Get a cup of coffee',
      icon: 'weather-rainy'
    },
    Clear: {
      color: '#f7b733',
      title: 'So Sunny',
      subtitle: 'It is hurting my eyes',
      icon: 'weather-sunny'
    },
    Thunderstorm: {
      color: '#616161',
      title: 'A Storm is coming',
      subtitle: 'Because Gods are angry',
      icon: 'weather-lightning'
    },
    Clouds: {
      color: '#1F1C2C',
      title: 'Clouds',
      subtitle: 'Everywhere',
      icon: 'weather-cloudy'
    },
  
    Snow: {
      color: '#00d2ff',
      title: 'Snow',
      subtitle: 'Get out and build a snowman for me',
      icon: 'weather-snowy'
    },
    Drizzle: {
      color: '#076585',
      title: 'Drizzle',
      subtitle: 'Partially raining...',
      icon: 'weather-hail'
    },
    Haze: {
      color: '#66A6FF',
      title: 'Haze',
      subtitle: 'Another name for Partial Raining',
      icon: 'weather-hail'
    },
    Mist: {
      color: '#3CD3AD',
      title: 'Mist',
      subtitle: "Don't roam in forests!",
      icon: 'weather-fog'
    }
  };

class WeatherShow extends React.Component {
  render() {
    return (
      <View
        style={[
          styles.weatherContainer,
          { backgroundColor:  weatherConditions[this.props.weather].color }
        ]}
      >
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            size={72}
            name={weatherConditions[this.props.weather].icon}
            color={"#fff"}
          />
          <Text style={styles.tempText}>{this.props.temperature}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[this.props.weather].title}</Text>
          <Text style={styles.subtitle}>
            {weatherConditions[this.props.weather].subtitle}
          </Text>
        </View>
      </View>
    );
  }
}

WeatherShow.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  tempText: {
    fontSize: 72,
    color: "#fff"
  },
  bodyContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: "#fff"
  },
  subtitle: {
    fontSize: 24,
    color: "#fff"
  }
});

export default WeatherShow;
