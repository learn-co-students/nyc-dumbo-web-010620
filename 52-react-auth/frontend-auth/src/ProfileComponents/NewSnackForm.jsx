import React, { Component } from 'react';

class NewSnackForm extends Component {

  state = {
    name: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.token);

    fetch("http://localhost:3000/snacks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${this.props.token}`
      },
      body: JSON.stringify({
        name: this.state.name
      })
    })
    .then(r => r.json())
    .then((resp) => {
      console.log(resp);
      if (resp.id) {
        this.props.addOneSnack(resp)
      } else {
        console.log("SNACK FAILED. YOU SUCK AT LOGGING IN");
      }
    })



  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Snack Name:</label>
        <input type="text" autoComplete="off" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="submit" value="Create New Snack" />
      </form>
    );
  }

}

export default NewSnackForm;
