import React from 'react';
import './App.css';
import MusiciansContainer from './Components/MusiciansContainer'
import NewMusicianForm from './Components/NewMusicianForm'
import musiciansData from './musicians'

class App extends React.Component {

  state={
    musicians: musiciansData
  }

  addOneMusician = (muscianObj) => {

    let newMusicianObject = {
      ...muscianObj,
      id: Math.floor(Math.random() * 1000),
      played: 0
    }

    // fetch("http://localhost:3000/musicians", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(newMusicianObject)
    // })
    // .then(r => r.json())
    // .then((newMusicianObject) => {

      let theNewArray = [newMusicianObject, ...this.state.musicians]

      this.setState({
        musicians: theNewArray
      })

    // })


  }






  deleteOneMusician = (id) => {

    // fetch(`http://localhost:3000/musicians/${id}`, {
    //   method: "DELETE"
    // })
    // .then(r => r.json())
    // .then(() => {
      let filteredArray = this.state.musicians.filter(musicianObj => {
        return musicianObj.id !== id
      })

      this.setState({
        musicians: filteredArray
      })
    // })




  }






  updateOneMusician = (id, numberToIncreasePlayed) => {

    // let foundObject = this.state.musicians.find(musicianObj => musicianObj.id === id)

    // fetch(`http://localhost:3000/musicians/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify({
      // ...foundObject,
      // played: musicianObj.played + numberToIncreasePlayed
    // })
    // })
    // .then(r => r.json())
    // .then(() => {
      let theUpdatedArray = this.state.musicians.map((musicianObj) => {
        if (musicianObj.id === id) {
          return {
            ...musicianObj,
            played: musicianObj.played + numberToIncreasePlayed
          }
        } else {
          return musicianObj
        }
      })

      this.setState({
        musicians: theUpdatedArray
      })
    // })




  }

  render(){
    return (
      <div className="App">
        <h1>Musicians</h1>

        <NewMusicianForm
          addOneMusician={this.addOneMusician}
        />

        <MusiciansContainer
          title="Jam Studios"
          musicians={this.state.musicians}
          deleteOneMusician={this.deleteOneMusician}
          updateOneMusician={this.updateOneMusician}
        />
      </div>
    )
  }

}

export default App;
