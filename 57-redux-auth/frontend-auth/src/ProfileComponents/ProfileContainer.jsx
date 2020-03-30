import React, { Component } from 'react';
import Snack from './Snack'

class ProfileContainer extends Component {

  render() {
    let {id, username, snacks} = this.props.user

    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3>Snacks</h3>

        <ol>
          {
            /* Render User snacks */
          }
        </ol>

      </div>
    );
  }

}

export default ProfileContainer;
