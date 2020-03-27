import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../Redux/wizardActions'


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

    fetch("http://localhost:4000/wizards", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then((newWizard) => {
      this.props.addWizard(newWizard);
    })
  }

  render() {
    let {name, house, redux} = this.state
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



// mapDispatchToProps is a POJO that has key-value pairs in it that will be merged as props
  // the values of mapDispatchToProps is going to be a function definition (actionCreator)
let mapDispatchToProps = {
  addWizard
}




export default connect(null, mapDispatchToProps)(WizardForm);





























//
