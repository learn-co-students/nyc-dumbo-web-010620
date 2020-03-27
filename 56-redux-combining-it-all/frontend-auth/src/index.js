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


let initialState = {
  wizards: [],
  cats: []
}

const wizardReducer = (state = initialState, action) => {
  console.log(action, "FROM INSIDE THE REDUCER");
  switch (action.type) {
    case "ADD_WIZARD":

      let copyOfArray = [...state.wizards, action.payload]
      return {
        ...state,
        wizards: copyOfArray
      }


    case "SET_ALL_WIZARDS":
      return {
        ...state,
        wizards: action.payload
      }

    default:
      return state
  }
}










let userInitialState = {
  id: 0,
  username: "",
  user_wizards: []
}


const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}












let singularObject = {
  user: userReducer,
  wizardInfo: wizardReducer
}

let rootReducer = combineReducers(singularObject)



















let storeObject = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)





ReactDOM.render(
  <Provider store={storeObject}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
