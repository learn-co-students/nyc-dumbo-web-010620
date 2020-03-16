import React from 'react';

class Planeteer extends React.Component {

  state = {
    haveIBeenClickedOn: false
  }

  handleClick = (e) => {
    this.setState({
      haveIBeenClickedOn: !this.state.haveIBeenClickedOn
    })
  }


  render() {
    let {name, pictureUrl, twitter, fromUSA, born, quote, bio} = this.props.planeteer
    let age = new Date().getFullYear() - born
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name}
            className="card__image"
            onClick={ this.handleClick }
          />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{
                this.state.haveIBeenClickedOn ? quote : bio
              }</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: { age }</p>
              <p>{ fromUSA ? "From USA" : "Working Overseas" }</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
