import React from 'react';
import SingularBurger from './SingularBurger'


class Order extends React.Component{

  state={
    clicked: false
  }

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    return (
      <div className="card" >
        <h4 onClick={this.handleClick}>{
            /* RENDER TIMESTAMP */
          }</h4>
        <p>{this.props.price}</p>

        {
          this.state.clicked
            ?
          <ul className="burgersList">
            {
              /* RENDER BURGERS FOR THE ORDERS HERE */
            }
          </ul>
            :
          null
        }

        <button className="deleteButton">x</button>
      </div>
    )
  }
}


export default Order;
