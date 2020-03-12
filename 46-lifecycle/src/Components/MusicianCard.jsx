import React, {Component} from 'react'

class MusicianCard extends Component {

  state = {
    className: "liked"
  }

  componentDidMount(){
    console.log("HELLO", this.props.musicianObj.musician);
  }

  componentDidUpdate(prevProps, prevState) {
    // inside componentDidUpdate, wrap your setState in an if statement
    // console.log(prevProps, this.props);
    // console.log(prevState, this.state);
    if (prevProps.musicianObj.played < this.props.musicianObj.played) {
      this.setState({
        className: "liked"
      })
    }

    if (prevProps.musicianObj.played > this.props.musicianObj.played) {
      this.setState({
        className: "disliked"
      })
    }
  }

  componentWillUnmount(){
    console.log("Goodbye from", this.props.musicianObj.musician);
  }

  handleDelete = (e) => {
    this.props.deleteOneMusician(this.props.musicianObj.id);
  }

  handleBeingPlayed = (e) => {
    let number = Math.random() < .5 ? 20 : -4
    this.props.updateOneMusician(this.props.musicianObj.id, number)
  }

  render(){
    let {musician, instrument, played} = this.props.musicianObj

    return (
      <React.Fragment>
        <div className={`container ${this.state.className}`}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/618EEbPKRbL._AC_SL1200_.jpg" alt="music"></img>
          <button className="delButton" onClick={ this.handleDelete }>
            x
          </button>
          <p><span>{ musician } plays </span>{ instrument }</p>
          <button onClick={ this.handleBeingPlayed } >
            {
              played === 0
                ?
              'You need more practice'
                :
              `Played ${ played } times`
            }
          </button>
        </div>
      </React.Fragment>
    )

  }

}

export default MusicianCard
