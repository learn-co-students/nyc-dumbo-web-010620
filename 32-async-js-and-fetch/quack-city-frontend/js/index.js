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
    imageUrl: event.target.image_url.value,
    rating: 0
  }

  renderDuckListItem(newDuckObj) // render to the list

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
    duckLi.remove()
  }
})

/****** Render Helpers ******/
function renderDuckDetail(duckObj) {
  detailDiv.innerHTML = `
    <h1>${duckObj.name}</h1>
    <div class="image">
      <h2 class="rating">${duckObj.rating}</h2>
      <img src="${duckObj.imageUrl}">
    </div>
    <h2 id="duck-rating">Rate That Duck</h2>
    <form id="score-form" data-id="${duckObj.id}">
      <input type="number" name="score" value="${duckObj.rating}" min="0" max="10" step="1">
      <input type="submit" value="Rate">
    </form>
  `
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
renderDuckList(ducksArray)
renderDuckDetail(ducksArray[0])