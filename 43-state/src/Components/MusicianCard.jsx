import React, {Component} from 'react'

class MusicianCard extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     played: 0,
  //     playedAtCarnegieHall: true
  //   }
  //   this.handleBeingPlayed = this.handleBeingPlayed.bind(this)
  // }

  state = {
    played: 0,
    playedAtCarnegieHall: true
  }

  handleBeingPlayed = (e) => {
    // console.log(this.state, "BEFORE");

    // setState will merge the object (first argument) into your previous state
    // second argument of setState is a callback to be called after state changes && it rerenders
    // setState is asynchronous
    this.setState({
      played: this.state.played + 1
    }, () => {
      console.log(this.state, "CALLBACK");
    })

    // console.log(this.state, "AFTER");

    // functional setState will merge the object being returned by the first callback into your previous state
      // used when your new state is dependent on the old state

    // this.setState((prevStateObj) => {
    //   return {
    //     played: prevStateObj.played + 1
    //   }
    // })

  }

  render(){
    console.log(this.state);
    return (
      <React.Fragment>
        <div className="container">
          <img src="https://images-na.ssl-images-amazon.com/images/I/618EEbPKRbL._AC_SL1200_.jpg" alt="music"></img>
          <p><span>{ this.props.musician } plays </span>{ this.props.instrument }</p>
          <button onClick={ this.handleBeingPlayed } onContextMenu={ () => { console.log("hellooo") } } >
            Played { this.state.played } times
          </button>
        </div>
      </React.Fragment>
    )

  }

}

export default MusicianCard
