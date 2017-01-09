import React,{ Component } from 'react';
import Count from './components/Count.js';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './components/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

export default class App extends Component{
  render(){
    return(
      <div>
        <Provider store = {createStore(reducers, composeWithDevTools(applyMiddleware()))}>
          <Count />
        </Provider>
      </div>
    );
  }
}
