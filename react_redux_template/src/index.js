import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
const createDevWithMiddleware = composeWithDevTools(applyMiddleware())

ReactDOM.render(
  <Provider store={createStore(reducers,createDevWithMiddleware)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
