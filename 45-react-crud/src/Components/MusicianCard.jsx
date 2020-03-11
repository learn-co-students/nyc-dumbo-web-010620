import React, {Component} from 'react'

class MusicianCard extends Component {

  handleDelete = (e) => {
    // console.log("clicked delete");
    // console.log(this.props);
    this.props.deleteOneMusician(this.props.musicianObj.id);
  }

  handleBeingPlayed = (e) => {
    // console.log("THIS IS THE LIKE BUTTON BEING CLICKED");
    this.props.updateOneMusician(this.props.musicianObj.id, 5)
  }

  render(){
    let {musician, instrument, played} = this.props.musicianObj
    let string = ""
    if (played === 0) {
      string = "You need more practice"
    } else {
      string = `Played ${ played } times`
    }

    return (
      <React.Fragment>
        <div className="container">
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
            { /* string */ }

            {/* 'boolean' ? 'what to show if true' : 'what to show if false' */}



          </button>
        </div>
      </React.Fragment>
    )

  }

}

export default MusicianCard
