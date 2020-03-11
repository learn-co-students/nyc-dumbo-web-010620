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
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let {musician, instrument} = this.state
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
