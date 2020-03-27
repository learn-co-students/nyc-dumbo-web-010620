import React, { Component } from 'react';
import './App.css';
import WizardDisplay from './Components/WizardDisplay'
import WizardForm from './Components/WizardForm'
import Header from './Components/Header'
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount() {
    fetch("http://localhost:4000/wizards")
    .then(r => r.json())
    .then((wizzies) => {
      this.props.setAllWizards(wizzies)
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <WizardForm/>
        <WizardDisplay/>
      </div>
    );
  }
}



let setAllWizards = (wizardsArray) => {
  return {
    type: "SET_ALL_WIZARDS",
    payload: wizardsArray
  }
}



let mapDispatchToProps = {
  setAllWizards
}




export default connect(null, mapDispatchToProps)(App);
















//
