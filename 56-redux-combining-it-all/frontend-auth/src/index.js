import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// IMPORT FOR REDUX STUFF
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Provider is a component that can be rendered on to the DOM
  // Provider is expecting a prop key called store

// combineReducers
import { combineReducers } from 'redux'


import ReduxThunk from 'redux-thunk';
import {applyMiddleware, compose} from 'redux'
// import {compose} from 'redux'

import userReducer from './Redux/userReducer'
import wizardReducer from './Redux/wizardReducer'






let singularObject = {
  user: userReducer,
  wizardInfo: wizardReducer
}

let rootReducer = combineReducers(singularObject)





const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;





let storeObject = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
)





ReactDOM.render(
  <Provider store={storeObject}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
