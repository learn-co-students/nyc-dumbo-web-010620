import React, { Component } from 'react';
import Snack from './Snack'
import {connect} from 'react-redux'

class ProfileContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>{this.props.user.username}&apos;s Profile</h2>
        <h3>Snacks</h3>

        <ol>
          {
            this.props.user.user_snacks.map((user_snack) => {
              return <Snack key={user_snack.id} snack={user_snack.snack} />
            })
          }
        </ol>

      </div>
    );
  }

}

const getInfoPlease = (reduxState) => {
  return {
    user: reduxState.user
  }
}


export default connect(getInfoPlease, {})(ProfileContainer);
