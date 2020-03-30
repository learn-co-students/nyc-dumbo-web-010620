// REDUCER

let initialState = {

}

let changeThisToBeWhateverYouWant = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}


export default changeThisToBeWhateverYouWant

// actionCreator

export const actionCreatorName = (payloadThing) => {
  return {
    type: "ACTION_CREATOR_NAME",
    payload: payloadThing
  }
}

// import the actionCreator into components
// pass that in as the second argument (using an {}) of connect's first set of ()
// when an event happens, you invoke props.actionCreatorName()

// reducer then needs a case for ACTION_CREATOR_NAME
// the return value of a reducer becomes state
  // please use spread operator
