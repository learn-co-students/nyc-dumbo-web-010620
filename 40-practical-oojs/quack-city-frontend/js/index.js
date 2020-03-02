const adapter = new APIAdapter("http://localhost:3000")

/****** DOM Elements ******/
const duckListUl = document.querySelector("#ducks-container")
const duckBtn = document.querySelector("#new-duck-button")
const closeModalSpan = document.querySelector("#close-modal")
const modalDiv = document.querySelector("#modal")
const newDuckForm = document.querySelector("#new-duck-form")
const detailDiv = document.querySelector("#detail")

/****** Event Listeners ******/
closeModalSpan.addEventListener("click", function () {
  modalDiv.classList.remove("open")
})

duckBtn.addEventListener("click", function () {
  modalDiv.className = "open"
})

newDuckForm.addEventListener("submit", function (event) {
  event.preventDefault() // stop the form from making a network request and refreshing the page

  const newDuckObj = {
    name: event.target.name.value, // get the input field values
    image_url: event.target.image_url.value,
    category_name: event.target.category_name.value,
    rating: 0
  }

  // make fetch happen
  adapter.createDuck(newDuckObj)
    .then(responseDuckObj => {
      const newDuck = new Duck(responseDuckObj)
      newDuck.renderLi(duckListUl) // render to the list
    })

  modalDiv.classList.remove("open") // close the modal
})

// EVENT DELEGATION
detailDiv.addEventListener("submit", event => {
  if (event.target.id === "score-form") {
    event.preventDefault()

    const rating = event.target.score.value
    const duckId = parseInt(event.target.dataset.id)
    const duckObj = Duck.all.find(duck => duck.id === duckId)

    updateDuck(duckObj.id, rating)
      .then(updatedDuckData => {
        duckObj.updateRating(updatedDuckData.rating)
      })

  }
})

duckListUl.addEventListener("click", event => {
  if (event.target.className === "name") {
    const duckId = parseInt(event.target.dataset.id)
    const duckObj = Duck.all.find(duck => duck.id === duckId)
    duckObj.renderDetail(detailDiv)
  }

  if (event.target.className === "delete") {
    const duckLi = event.target.closest(".item")
    const duckId = parseInt(event.target.dataset.id)
    adapter.deleteDuck(duckId)
    // optimistic rendering, we aren't waiting for the fetch before removing from the page
    duckLi.remove()
  }
})

/****** Initial Render ******/
adapter.getDucks()
  .then(responseDucksArray => {
    responseDucksArray.forEach(duckObj => {
      const newDuck = new Duck(duckObj)
      newDuck.renderLi(duckListUl)
    })

    Duck.all[0].renderDetail(detailDiv)
  })