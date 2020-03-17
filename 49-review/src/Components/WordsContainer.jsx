import React, { Component } from 'react';
import Word from './Word'

class WordsContainer extends Component {

  render() {
    let theArrayOfComponents = this.props.words.map(wordObj => {
      return <Word
        key={wordObj.word}
        word={wordObj}
        deleteWord={this.props.deleteWord}
        updateWord={this.props.updateWord}

      />
    })

    return (
      <div>
        {theArrayOfComponents}
      </div>
    );
  }

}

export default WordsContainer;
