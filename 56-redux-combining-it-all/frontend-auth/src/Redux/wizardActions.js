// THUNKY STUFF


export const fetchAndSetAllWizards = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/wizards")
    .then(r => r.json())
    .then((wizzies) => {
      dispatch(setAllWizards(wizzies))
    })
  }
}





// actionCreator => addWizard (func Definition)
// actionObject => action (POJO)
export const addWizard = (wizzyObject) => {

  let actionObject = {
    type: "ADD_WIZARD",
    payload: wizzyObject
  }

  return actionObject

}

export const setAllWizards = (wizardsArray) => {
  return {
    type: "SET_ALL_WIZARDS",
    payload: wizardsArray
  }
}
