/****** DOM Elements ******/
const duckListUl = document.querySelector("#ducks-container")
const duckBtn = document.querySelector("#new-duck-button")
const closeModalSpan = document.querySelector("#close-modal")
const modalDiv = document.querySelector("#modal")
const newDuckForm = document.querySelector("#new-duck-form")

/****** Event Listeners ******/
closeModalSpan.addEventListener("click", function () {
  modalDiv.classList.remove("open")
})

duckBtn.addEventListener("click", function () {
  modalDiv.className = "open"
})

newDuckForm.addEventListener("submit", function (event) {
  // always prevent default for form submit events!
  event.preventDefault()
  // get the user input from the input fields
  const duckName = event.target.name.value
  const duckImage = event.target.image_url.value
  // now that we have the information from the form, we can do whatever we want with it!
  // create an object
  const newDuckObj = {
    name: duckName,
    imageUrl: duckImage
  }
  // use our render helper to put that object on the page
  renderDuckListItem(newDuckObj)
  // close the modal
  modalDiv.classList.remove("open")
})

/****** Render Helpers ******/
function renderDuckListItem(duckObj) {
  // 1. Create the DOM node
  const duckLi = document.createElement("li")

  // 2. Add any attributes it needs
  duckLi.textContent = duckObj.name
  duckLi.classList.add("item")

  // 3. Append to its parent element
  duckListUl.append(duckLi)
}

function renderDuckList(ducksArray) {
  ducksArray.forEach(function (duckObj) {
    renderDuckListItem(duckObj)
  })
}

/****** Initial Render ******/
renderDuckList(ducksArray)
