import React, {Component} from 'react'

class MusicianCard extends Component {

  render(){
    let {musician, instrument, played} = this.props.musicianObj
    return (
      <React.Fragment>
        <div className="container">
          <img src="https://images-na.ssl-images-amazon.com/images/I/618EEbPKRbL._AC_SL1200_.jpg" alt="music"></img>
          <p><span>{ musician } plays </span>{ instrument }</p>
          <button onClick={ this.handleBeingPlayed } >
            Played { played } times
          </button>
        </div>
      </React.Fragment>
    )

  }

}

export default MusicianCard
