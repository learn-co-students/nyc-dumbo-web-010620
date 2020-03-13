import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import PigPen from "./PigPen";
import Dropdown from "./Dropdown";


import hogs from "../porkers_data";

class App extends Component {

  state={
    piggies: [],
    filterTerm: "Greased"
  }

  componentDidMount(){
    // fetch here
    this.setState({
      piggies: hogs
    })
  }

  changeFilterTerm = (termFromChild) => {
    this.setState({
      filterTerm: termFromChild
    })
  }

  returnAnArray = () => {
    let theArrayToReturn = this.state.piggies
    // 13 pigs
    if (this.state.filterTerm === "Greased") {
      theArrayToReturn = this.state.piggies.filter((pig) => {
        return pig.greased
      })
      // filterd version of pigs
    }

    if (this.state.filterTerm === "Clean") {
      theArrayToReturn = this.state.piggies.filter((pig) => {
        return !pig.greased
      })
    }

    return theArrayToReturn
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Nav />
        <Dropdown
          filterTerm={this.state.filterTerm}
          changeFilterTerm={this.changeFilterTerm}
        />
        <PigPen piggies={this.returnAnArray()} />
      </div>
    );
  }
}

export default App;
