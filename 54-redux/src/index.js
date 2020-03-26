import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// IMPORT FOR REDUX STUFF
import { createStore } from 'redux'

// createStore is a () => {}

// the return value of the reducer is going to be the state
// the reduce is the brains of your application
  // it determines how state should be changed

let initialState = {
  number: 20,
  chicken: "Yes"
}

const reducer = (state = initialState, action) => {
  // console.log(action, "INSIDE THE REDUCER");
  // console.log(state, "THIS IS THE STATE");
  switch (action.type) {
    case "ADD_NUMBER":
      // DO SOME LOGIC HERE
      let newNumber = state.number + action.payload
      return {
        ...state,
        number: newNumber
      }


    case "SUBTRACT_NUMBER":
      let theSubtractedNumber = state.number - action.payload.thingToSubtract
      return {
        ...state,
        number: theSubtractedNumber
      }


    default:
      return state
  }

}

let storeObject = createStore(reducer)

// console.log(storeObject);
console.log(storeObject.getState(), "BEFORE")

// CHANGE THE NUMBER TO ADD BY 8000
let actionObject = {
  type: "ADD_NUMBER",
  payload: 8000
}

// Dispatching an action invokes the reducer function
storeObject.dispatch(actionObject)
storeObject.dispatch(actionObject)
storeObject.dispatch(
  {type: "SUBTRACT_NUMBER", payload: {thingToSubtract: 10}}
)

console.log(storeObject.getState(), "AFTER")

// debugger;


















ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
