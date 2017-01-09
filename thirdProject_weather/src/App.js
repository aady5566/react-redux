import React, { Component } from 'react';
import SearchBar from './containers/SearchBar'
import WeatherList from './containers/WeatherList'
import './style/style.css'
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
