import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// IMPORT FOR REDUX STUFF
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Provider is a component that can be rendered on to the DOM
  // Provider is expecting a prop key called store

import wizardsArray from './wizards'


let initialState = {
  wizards: wizardsArray,
  cats: []
}





const reducer = (state = initialState, action) => {
  console.log(action, "FROM INSIDE THE REDUCER");
  switch (action.type) {
    case "ADD_WIZARD":

      let copyOfArray = [...state.wizards, action.payload]
      return {
        ...state,
        wizards: copyOfArray
      }

    default:
      return state
  }
}





let storeObject = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)





ReactDOM.render(
  <Provider store={storeObject}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
