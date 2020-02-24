/****** Application State *******/
let ducksArray = []

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
  fetch("http://localhost:3000/ducks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newDuckObj)
  })
    .then(response => response.json())
    .then(responseDuckObj => {
      ducksArray.push(responseDuckObj)
      renderDuckListItem(responseDuckObj) // render to the list
    })


  modalDiv.classList.remove("open") // close the modal
})

// EVENT DELEGATION
duckListUl.addEventListener("click", event => {
  if (event.target.className === "name") {
    const duckId = parseInt(event.target.dataset.id)
    const duckObj = ducksArray.find(duck => duck.id === duckId)
    renderDuckDetail(duckObj)
  }

  if (event.target.className === "delete") {
    const duckLi = event.target.closest(".item")
    // TODO: delete using fetch
    duckLi.remove()
  }
})

/****** Render Helpers ******/
function renderDuckDetail(duckObj) {
  detailDiv.innerHTML = `
    <h1>${duckObj.name}</h1>
    <p class="category">
      Category: <span>${duckObj.category_name}</span>
    </p>
    <div class="image">
      <h2 class="rating">${duckObj.rating}</h2>
      <img src="${duckObj.image_url}">
    </div>
    <h2 id="duck-rating">Rate That Duck</h2>
    <form id="score-form" data-id="${duckObj.id}">
      <input type="number" name="score" value="${duckObj.rating}" min="0" max="10" step="1">
      <input type="submit" value="Rate">
    </form>
  `
  // NESTED EVENT LISTENER
  const scoreForm = detailDiv.querySelector("#score-form")
  scoreForm.addEventListener("submit", e => {
    e.preventDefault()

    const rating = scoreForm.score.value

    fetch(`http://localhost:3000/ducks/${duckObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rating: rating
      })
    })
      .then(r => r.json())
      .then(updatedDuckData => {
        // we have to keep our global ducks array updated since we are using it for rendering out each individual duck's detail
        const foundDuckObj = ducksArray.find(duck => duck.id === duckObj.id)
        foundDuckObj.rating = updatedDuckData.rating
        // once we've updated the duck, re-render it
        renderDuckDetail(foundDuckObj)
      })

  })

}

function renderDuckListItem(duckObj) {
  const duckLi = document.createElement("li")
  duckLi.classList.add("item")
  duckLi.innerHTML = `
     <span data-id="${duckObj.id}" class="name">${duckObj.name}</span>
     <button data-id="${duckObj.id}" class="delete">X</button>
  `
  duckListUl.append(duckLi)
}

function renderDuckList(ducksArray) {
  ducksArray.forEach(duckObj => renderDuckListItem(duckObj))
}

/****** Initial Render ******/
fetch("http://localhost:3000/ducks")
  .then(response => response.json())
  .then(responseDucksArray => {
    ducksArray = responseDucksArray // save the ducks in a global variable so we can access it from other functions
    renderDuckList(ducksArray)
    renderDuckDetail(ducksArray[0])
  })