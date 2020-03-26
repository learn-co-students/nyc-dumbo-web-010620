import React, { Component } from 'react';
import {connect} from 'react-redux'


class WizardForm extends Component {

  state = {
    name: "",
    house: "",
    redux: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addWizardPropKey(this.state)
    console.log("Submitted!");
  }

  render() {
    let {name, house, redux} = this.state
    console.log(this.props, "WIZARD FORM PROPS");
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" onChange={this.handleChange} value={name}/>
        <label>
          House
        </label>
          <input type="text" name="house" onChange={this.handleChange} value={house}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" onChange={this.handleChange} value={redux}/>
        <input type="submit"/>
      </form>
    );
  }

}




// actionCreator => addWizard (func Definition)
// actionObject => action (POJO)
const addWizard = (wizzyObject) => {

  let actionObject = {
    type: "ADD_WIZARD",
    payload: wizzyObject
  }

  return actionObject

}




// mapDispatchToProps is a POJO that has key-value pairs in it that will be merged as props
  // the values of mapDispatchToProps is going to be a function definition (actionCreator)
let mapDispatchToProps = {
  addWizardPropKey: addWizard
}




export default connect(null, mapDispatchToProps)(WizardForm);





























//
