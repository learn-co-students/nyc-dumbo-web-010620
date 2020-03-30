import React from 'react';
import {connect} from 'react-redux'
import Snack from './Snack'

const SnackContainer = (props) => {
  return (
    <div>
      <h2>Here are all the snacks available in our store!</h2>
      <ul>
        {
          props.snacks.map((snackObj) => {
            return <Snack key={snackObj.id} snack={snackObj}/>
          })
        }
      </ul>
    </div>
  )
};

const mstp = (reduxState) => {
  return {
    snacks: reduxState.snacks.all
  }
}


export default connect(mstp, {})(SnackContainer);
