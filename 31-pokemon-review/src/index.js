document.addEventListener('DOMContentLoaded', () => {

  // 1. find where we put it on the page (look for a element to put it in)
  const pokeContainer = document.querySelector("#pokemon-container")

  // 1. find the element we care about
  const searchInput = document.querySelector("#pokemon-search-input")
  // 2. determine the type of event we care about
  searchInput.addEventListener('input', e => {
    // 3. write callback function to run when that event happens
    const userInput = searchInput.value
    // as something is typed, only display the pokemon cards whose name match the user input

    // OPTION 1: go through the cards DOM nodes, 
    // figure out if their header name matches the pokemon name
    // use CSS/style to show or hide the cards

    // OPTION 2: filter the array base on the matching names
    // use the filtered array to re-render the list
    const filteredPoke = POKEMON.filter((pokemon) => pokemon.name.includes(userInput))
    pokeContainer.innerHTML = ""

    filteredPoke.forEach((pokemon) => {
      const card = document.createElement("div")
      card.className = "pokemon-card"
      card.innerHTML = `
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      `
      pokeContainer.append(card)
    })
  })


  POKEMON.forEach((pokemon) => {
    pokeContainer.innerHTML = pokeContainer.innerHTML + `
    <div class="pokemon-card">
      <div class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div class="pokemon-image">
          <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
        </div>
      </div>
    </div>
  `
  })

})