import React, { Component } from 'react';
import './App.css';
import WizardDisplay from './Components/WizardDisplay'
import WizardForm from './Components/WizardForm'
import Header from './Components/Header'
import {connect} from 'react-redux'
import {setAllWizards, fetchAndSetAllWizards} from './Redux/wizardActions'

class App extends Component {

  componentDidMount() {
    fetch("http://localhost:4000/wizards")
    .then(r => r.json())
    .then((wizzies) => {
      this.props.setAllWizards(wizzies)
    })

    // this.props.fetchAndSetAllWizards()
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



let mapDispatchToProps = {
  setAllWizards,
  fetchAndSetAllWizards
}




export default connect(null, mapDispatchToProps)(App);
















//
