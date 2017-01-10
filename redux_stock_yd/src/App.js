import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './containers/SearchBar'
import CardWithList from './containers/CardWithList'
import "./style/style.css"
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <SearchBar />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <CardWithList />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
