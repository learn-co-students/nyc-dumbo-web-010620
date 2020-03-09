import React, {Component} from 'react'

class MusicianCard extends Component{

  render(){
    console.log(this.props);
    return (
      <div>
        <h6> {this.props.musician} </h6>
        <marquee>Plays {this.props.instrument}</marquee>
      </div>
    )

  }

}

export default MusicianCard
