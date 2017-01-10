import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './containers/SearchBar'
import StockList from './containers/StockList'
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <SearchBar />
        </MuiThemeProvider>
        <StockList/>
      </div>
    );
  }
}

export default App;
