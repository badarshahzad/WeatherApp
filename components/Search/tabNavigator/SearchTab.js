import React from "react";
import { StyleSheet, Text, View, Keyboard } from "react-native";
import { StackNavigator } from "react-navigation";
import { Button, Container, Content } from "native-base";
import SearchHeader from "../SearchHeader";
import axios from "axios";
import WeatherShow from "../../WeatherShow";

export default class SearchTab extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    searchCity: "",
    cityFound: false,
    cityWeatherData: {}
  };

  citySearch = () => {
    Keyboard.dismiss();
    const citySearch = this.state.searchCity.toLowerCase();

    const query =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      citySearch +
      "&appId=1c408c0ea87e20e7a5ec78ed4b74b616&units=metric";

    axios.get(query).then(response => {
      console.log(response.request._response);
      console.log("**************************************");

      this.setState({cityWeatherData:response.request._response});
      

      // const weather = response.request._response.weather ? response.request._response.weather: false ;
      // const main = response.request._response.main ? response.request._response.main: false;
      // const wind = response.request._response.wind ? response.request._response.wind: false ;
      // const sys = response.request._response.sys? response.request._response.sys: false;
    }).catch((error) => {
      this.setState({cityFound:false});
    });

    // Data
    const data = {
      coord: { lon: 71.58, lat: 32.57 },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      base: "stations",
      main: {
        temp: 289.359,
        pressure: 998.87,
        humidity: 81,
        temp_min: 289.359,
        temp_max: 289.359,
        sea_level: 1028.94,
        grnd_level: 998.87
      },
      wind: { speed: 1.37, deg: 303.002 },
      clouds: { all: 32 },
      dt: 1540403834,
      sys: {
        message: 0.0063,
        country: "PK",
        sunrise: 1540344286,
        sunset: 1540384221
      },
      id: 1170425,
      name: "Mianwali",
      cod: 200
    };
  };

  renderContent = () => {

    if(this.state.cityWeatherData){

      return <WeatherShow data={this.state.cityWeatherData}/>
    }else{
      alert("Sorry! No city exist with this name. ");
    }
  }

  render() {
    return (
      <Container>
        <SearchHeader
          value={this.state.searchCity}
          onChangeText={searchCity => this.setState({ searchCity })}
          citySearch={this.citySearch}
        />
        <Content>

          {this.renderContent()}
        </Content>
      </Container>
    );
  }
}
