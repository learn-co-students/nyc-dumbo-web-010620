import React, { Component } from 'react';

class Form extends Component {

  state = {
    musician: "Michael Jordan",
    instrument: "Keytar"
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addOneMusician(this.state)
  }

  handleAllInput = (e) => {
    // only works when keys of state matches name of input
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleMusician = (e) => {
  //   this.setState({
  //     musician: e.target.value
  //   })
  // }

  // handleInstrument = (e) => {
  //   this.setState({
  //     instrument: e.target.value
  //   })
  // }

  render() {
    let {musician, instrument} = this.state
    // value for an input is state controlling input
    // onChange for an input is input controlling state
    // a controlled component needs both
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="musician">Musician:</label>
        <input
          id="musician"
          type="text"
          name="musician"
          autoComplete="off"
          value={musician}
          onChange={this.handleAllInput}
        />
      <label htmlFor="instrument">Plays:</label>
        <input
          id="instrument"
          type="text"
          name="instrument"
          autoComplete="off"
          value={instrument}
          onChange={this.handleAllInput}
        />
      <input type="submit" value="Make"/>
      </form>
    );
  }

}

export default Form;
