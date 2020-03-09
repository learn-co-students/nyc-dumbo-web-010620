import React from 'react';
import logo from './logo.svg';
import './App.css';
import MusiciansContainer from './Components/MusiciansContainer'

// functional component
  // must return ONE JSX element
  // props come from the first argument of your function

// class component
  // must have a render() function
    // must return ONE JSX element
  // must extend React.Component
  // props come from `this.props`


function App() {
  return (
    <div className="App">
        <h1>Musicians</h1>
        <p>Hello</p>
        <MusiciansContainer title="Jam Studios"/>
    </div>
  )
}

export default App;
