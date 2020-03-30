let initialState = {
  all: []
}

let snackReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_ALL_SNACKS":

    return {
      ...state,
      all: action.payload
    }

    default:
      return state
  }
}


export default snackReducer
