import React from 'react';
import './App.css';
import MusiciansContainer from './Components/MusiciansContainer'
import NewMusicianForm from './Components/NewMusicianForm'
import musiciansData from './musicians'
import Search from './Components/Search'

class App extends React.Component {

  state={
    musicians: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:4000/musicians")
      .then(r => r.json())
      .then((arrayOfMusicians) => {
        this.setState({
          musicians: arrayOfMusicians
        })
      })
  }


  thisIsTheFunctionThatWillChangeTheSearchTerm = (theTermFromTheChild) => {
    // console.log(theTermFromTheChild, "LOGGED IN APP");
    this.setState({
      searchTerm: theTermFromTheChild
    })
  }



  addOneMusician = (muscianObj) => {
    let newMusicianObject = {
      ...muscianObj,
      played: 0
    }

    fetch("http://localhost:4000/musicians", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newMusicianObject)
    })
    .then(r => r.json())
    .then((newMusician) => {
      let theNewArray = [newMusician, ...this.state.musicians]
      this.setState({
        musicians: theNewArray
      })

    })


  }






  deleteOneMusician = (id) => {
    fetch(`http://localhost:4000/musicians/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      let filteredArray = this.state.musicians.filter(musicianObj => {
        return musicianObj.id !== id
      })
      this.setState({
        musicians: filteredArray
      })
    })
  }






  updateOneMusician = (id, numberToIncreasePlayed) => {

    let foundObject = this.state.musicians.find(musicianObj => musicianObj.id === id)

    fetch(`http://localhost:4000/musicians/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        ...foundObject,
        played: foundObject.played + numberToIncreasePlayed
      })
    })
    .then(r => r.json())
    .then(() => {
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
    })




  }

  willReturnAnArray = () => {
    let filteredArrayByName = this.state.musicians.filter((musicianObj) => {
      return musicianObj.musician.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || musicianObj.instrument.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredArrayByName
  }


  render(){
    return (
      <div className="App">
        <h1>Musicians</h1>

        <NewMusicianForm
          addOneMusician={this.addOneMusician}
        />

        <Search
          searchTerm={this.state.searchTerm}
          thisIsTheFunctionThatWillChangeTheSearchTerm={this.thisIsTheFunctionThatWillChangeTheSearchTerm}
        />

        <MusiciansContainer
          title="Jam Studios"
          musicians={this.willReturnAnArray()}
          deleteOneMusician={this.deleteOneMusician}
          updateOneMusician={this.updateOneMusician}
        />
      </div>
    )
  }

}

export default App;
