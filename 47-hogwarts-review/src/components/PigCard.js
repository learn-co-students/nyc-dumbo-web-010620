import React, { Component } from 'react';

class PigCard extends Component {

  state = {
    // You should not have the word `props` here
    clicked: false
  }

  changeState = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  render() {
    let {name, specialty, weight, greased, ["highest medal achieved"]: medal} = this.props.pig
    let theImageName = name.toLowerCase().split(" ").join("_")

    return (
      <div className="pigTile" onClick={this.changeState}>
        <h2>{name}</h2>
        <img src={require("../hog-imgs/" + theImageName + ".jpg")} alt={name}/>

        { this.state.clicked ?
            <div>
              <p>Specialty: {specialty}</p>
              <p>Weight: {weight} tons</p>
              <p>Greased: {greased ? "GREASY PIGGY" : "CLEAN PIGGY"} </p>
              <p>Medal Earned: {medal}</p>
              <p>Medal Earned 2: {this.props.pig["highest medal achieved"]}</p>
            </div>
          :
           null
        }





      </div>
    );
  }

}

export default PigCard;
