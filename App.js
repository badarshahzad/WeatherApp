import React from "react";
import { Container, Content, Text, Keyboard, Header } from "native-base";
import SearchHeader from "./components/SearchHeader";
import WeatherShow from "./components/WeatherShow";
import axios from "axios";


export default class App extends React.Component {
  state = {
    searchCity: "",
    cityFound: false,
    cityWeatherData: "",
    latitude: 0,
    longitude: 0,

    temp: 0
  };

  isLatitudeLongitude = false;

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       const lat = position.coords.latitude;
  //       const lon = position.coords.longitude;

  //       const query =
  //         "http://api.openweathermap.org/data/2.5/weather?lat=" +
  //         { lat } +
  //         "&lon=" +
  //         { lon } +
  //         "APPID=1c408c0ea87e20e7a5ec78ed4b74b616&units=metric";

  //       axios
  //         .get(query)
  //         .then(response => {
  //           console.log(response.request._response);
  //           console.log("**************************************");

  //           this.setState({ cityWeatherData: response.request._response });
  //         })
  //         .catch(error => {
  //           this.setState({
  //             cityFound: false,
  //             isLatitudeLongitude: true,
  //             latitude: position.coords.latitude,
  //             longitude: position.coords.longitude
  //           });
  //         });
  //     },
  //     error => {
  //       this.setState({
  //         isLatitudeLongitude: false
  //       });
  //     }
  //   );
  // }

  citySearch = () => {
    const searchText = this.state.searchCity.toLowerCase();

    const query =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      searchText +
      "&appId=1c408c0ea87e20e7a5ec78ed4b74b616&units=metric";

    axios
      .get(query)
      .then(response => {

        console.log("Data of Main Weather: " + JSON.stringify(response.data.weather[0].main));
        console.log("Data of Main Weather: " + JSON.stringify(response.data.main));
        
        const value1 = response.data.weather[0].main;
        const value2 = response.data.main.temp;
        this.setState({
          cityWeatherData: value1,
          temp: value2,
          cityFound:true,
        });

        

      }).then(() =>{
        Keyboard.dismiss();
      })
      
  };

  render() {
    return (
      <Container>
        <Header style={{height:18, backgroundColor:'#fefefe'}}/>
        <SearchHeader
         
          value={this.state.searchCity}
          onChangeText={searchCity => this.setState({ searchCity })}
          citySearch={this.citySearch}
        />
        <Content>
          {this.state.cityFound ? (
            <WeatherShow
              weather={this.state.cityWeatherData}
              temperature={this.state.temp}
            />
          ) : (
            <Text
              style={{
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {"Error Getting Weather Condtions"}
            </Text>
          )}
        </Content>
      </Container>
    );
  }
}
