import React from 'react';

const BoringInput = (props) => {


  let handleChange = (e) => {
    props.handleSeparateTerm(e.target.value)
  }

  return (
    <input
      type="text"
      value={props.separateTerm}
      onChange={ handleChange }
    />
  )
}

export default BoringInput;
