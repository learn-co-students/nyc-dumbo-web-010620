// function definitions whose only jobs are to return an action (POJO)

export const setAllSnacks = (snacksArr) => {
  return {
    type: "SET_ALL_SNACKS",
    payload: snacksArr
  }
}


export const setUserInformation = (responseFromFetch) => {
  return {
    type: "SET_USER_INFORMATION",
    payload: responseFromFetch
  }
}

export const logOut = () => {
  return {
    type: "LOG_OUT"
  }
}
