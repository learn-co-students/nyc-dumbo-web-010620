document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  let joke;

  // console.log({
  //   form: form,
  //   jokeList: jokeList,
  //   newJokeLi: newJokeLi
  // })

  function fetchJoke() {
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
    // .then(jokeData => joke = jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    // check this, what do we need an empty string for?
    const username = document.getElementById('name-input').value
    // const username = form.username.value

    const jokeList = document.getElementById('joke-list')

    // check this later, why is it empty?
    const newJokeLi = document.createElement('li')

    // we need the input where the name's being typed
    if (username === "") return;
    const returnOfFetch = fetchJoke()
    console.log(returnOfFetch)

    returnOfFetch.then(() => {
      // we need to create the element we want to add to the DOM
      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `
      // we need to append that element to some parent element 
      jokeList.appendChild(newJokeLi)
    })

  })
})
