import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

// REDUX-STUFF
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'


import userReducer from './Redux/userReducer'
import snackReducer from './Redux/snackReducer'


let rootReducer = combineReducers({
  user: userReducer,
  snacks: snackReducer
})

let storeObject = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



ReactDOM.render(
  <Provider store={storeObject}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
