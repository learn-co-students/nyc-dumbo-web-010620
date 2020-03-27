let initialState = {
  wizards: [],
  cats: []
}

const wizardReducer = (state = initialState, action) => {
  console.log(action, "FROM INSIDE THE REDUCER");
  switch (action.type) {
    case "ADD_WIZARD":

      let copyOfArray = [...state.wizards, action.payload]
      return {
        ...state,
        wizards: copyOfArray
      }


    case "SET_ALL_WIZARDS":
      return {
        ...state,
        wizards: action.payload
      }

    default:
      return state
  }
}

export default wizardReducer
