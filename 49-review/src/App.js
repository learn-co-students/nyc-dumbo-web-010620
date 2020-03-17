import React, { Component } from 'react';
import "./App.css"
import BoringInput from './Components/BoringInput'
import BoringPTag from './Components/BoringPTag'
import WordsContainer from './Components/WordsContainer'

class App extends Component {

  state={
    theThingIType: "Top",
    separateTerm: "Bottom",
    words: []
  }

  componentDidMount(){
    let arrayOfWords = [
      {word: "awk", author: "Isaac"},
      {word: "bums", author: "Joel"},
      {word: "Jezebel", author: "Steven"},
      {word: "doody", author: "Joel"},
      {word: "Michael Jordank", author: "Steven and Friends"}
    ]

    this.setState({
      words: arrayOfWords
    })
  }

  handleChange = (e) => {
    this.setState({
      theThingIType: e.target.value
    })
  }



  handleSeparateTerm = (inputFromChild) => {
    this.setState({
      separateTerm: inputFromChild
    })
  }



  updateWord = (wordToUpdate) => {

    let theUpdatedArray = this.state.words.map((wordObj) => {
      if (wordObj.word === wordToUpdate) {
        return {
          ...wordObj,
          word: wordObj.word + "!"
        }
      } else {
        return wordObj
      }
    })




    this.setState({
      words: theUpdatedArray
    })
  }




  deleteWord = (wordToDelete) => {
    // fetch(delete WORDs)
    // .then()
    // .then(() => {
    let theDeletedArray = this.state.words.filter(wordObj => {
      return wordObj.word !== wordToDelete
    })

    this.setState({
      words: theDeletedArray
    })

    // })
  }

  chooseTheWordsWisely = () => {
    let theFilteredArray = this.state.words.filter((wordObj) => {
      return wordObj.word.includes(this.state.separateTerm) || wordObj.author.includes(this.state.separateTerm)
    })
    return theFilteredArray
  }


  render() {
    return (
      <div className="App">
        <h1>Review</h1>

        <WordsContainer
          words={this.chooseTheWordsWisely()}
          deleteWord={this.deleteWord}
          updateWord={this.updateWord}
        />



        <hr/>



        <p>In-App Components</p>
        <input
          type="text"
          value={this.state.theThingIType}
          onChange={this.handleChange}
        />
        <p>{this.state.theThingIType}</p>



        <hr/>



        <p>Separate Components Controlling The Search</p>
        <BoringInput
          separateTerm={this.state.separateTerm}
          handleSeparateTerm={this.handleSeparateTerm}
        />
        <BoringPTag
          separateTerm={this.state.separateTerm}
        />



      </div>
    );
  }

}

export default App;
