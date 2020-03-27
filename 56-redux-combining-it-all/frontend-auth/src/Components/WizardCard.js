import React, { Component } from 'react';

class WizardCard extends Component {

  render() {
    let {name, house, redux} = this.props.wizard
    return (
      <div>
      <h6>{name}</h6>
        <p>
          {house} | {redux}
        </p>
      </div>
    );
  }
}



export default WizardCard;
