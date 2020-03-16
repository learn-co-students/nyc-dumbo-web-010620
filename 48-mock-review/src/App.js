import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ""
  }

  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
      .then(r => r.json())
      .then(planeteers => {
        this.setState({
          planeteers: planeteers
        })
      })
  }


  returnsAnArray = () => {
    let {planeteers, searchTerm} = this.state
    // planeteers => [{name, id, bio}, {name, id, bio}, {name, id, bio}]
    // searchTerm => "new"

    let filteredArray = planeteers.filter((planeteer) => {
      return planeteer.name.includes(searchTerm) || planeteer.bio.includes(searchTerm)
    })

    // filteredArray => [{name, id, bio}]
    return filteredArray
  }


  sendUpAPlaneteer = (newPlaneteer) => {
    console.log("APP IS CONSOLE LOGGING", newPlaneteer);

    fetch("http://localhost:4000/planeteers", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPlaneteer)
    })
      .then(r => r.json())
      .then((newlyCreatedPlaneteer) => {
        let theNewArray = [...this.state.planeteers, newlyCreatedPlaneteer]
        this.setState({
          planeteers: theNewArray
        })

      })
  }


  render(){
    return (
      <div>
        <Header />
        <SearchBar
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        <RandomButton
          sendUpAPlaneteer={this.sendUpAPlaneteer}
        />
        <PlaneteersContainer planeteers={this.returnsAnArray()}/>
      </div>
    );
  }

}

export default App;
