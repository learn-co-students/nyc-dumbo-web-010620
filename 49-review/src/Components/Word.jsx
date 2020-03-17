import React, { Component } from 'react';

class Word extends Component {

  handleDelete = (e) => {
    this.props.deleteWord(this.props.word.word);
  }

  handleClick = (e) => {
    this.props.updateWord(this.props.word.word);
  }

  render() {
    return (
      <div>
        <p> <span onClick={this.handleClick}>{this.props.word.word}</span> - created by {this.props.word.author}</p>
        <button onClick={this.handleDelete}>
          DELETE {this.props.word.word.toUpperCase()}
        </button>
      </div>
    );
  }

}

export default Word;
