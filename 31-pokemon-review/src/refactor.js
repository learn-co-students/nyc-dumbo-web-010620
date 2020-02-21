document.addEventListener('DOMContentLoaded', () => {

  /****** DOM Elements *****/
  const pokemonContainer = document.querySelector("#pokemon-container")
  const searchInput = document.querySelector("#pokemon-search-input")

  /****** Event Listeners *****/
  searchInput.addEventListener('input', () => {
    const userInput = searchInput.value
    const filteredPokemon = POKEMON.filter((pokemon) => pokemon.name.includes(userInput))
    pokemonContainer.innerHTML = ""

    renderPokemonCards(filteredPokemon)
  })

  // Flipping Sprites using Event Delegation
  pokemonContainer.addEventListener('click', event => {
    // check if an image was clicked by looking at the data-action attribute
    if (event.target.dataset.action === "flip") {
      // if an image was clicked, event.target is the image
      const img = event.target
      // figure out which pokemon was clicked using the id from the data-id attribute
      const pokemonId = parseInt(event.target.dataset.id)
      const clickedPokemon = POKEMON.find(pokemon => pokemon.id === pokemonId)
      // check the image src to determin which sprite is currently being displayed
      if (img.src === clickedPokemon.sprites.front) {
        img.src = clickedPokemon.sprites.back // flip!
      } else {
        img.src = clickedPokemon.sprites.front
      }
    }
  })

  /******* Render Helpers *******/
  function renderOnePokemon(pokemon) {
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
    pokemonContainer.append(card)
  }

  function renderPokemonCards(pokeArray) {
    pokeArray.forEach((pokemon) => renderOnePokemon(pokemon))
  }

  /******* Initial Render *******/
  renderPokemonCards(POKEMON)

})