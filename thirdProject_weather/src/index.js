import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import App from './App';
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const createDevWithMiddleware = composeWithDevTools(applyMiddleware(ReduxPromise))
// createStore(reducers, composeWithDevTools(applyMiddleware(ReduxPromise)))
ReactDOM.render(
  <Provider store={createStore(reducers,createDevWithMiddleware)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
