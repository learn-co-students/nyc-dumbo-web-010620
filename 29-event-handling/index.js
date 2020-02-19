// document.addEventListener("DOMContentLoaded", function () {

// 1. Find the element that we care about to trigger the event
const duckBtn = document.querySelector("#new-duck-button")
const closeModalSpan = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")

closeModalSpan.addEventListener("click", function () {
  modal.classList.remove("open")
})
// 2. Figure out what kind of event to listen for
// 3. Tell Javascript what function to run when that event happens
duckBtn.addEventListener("click", function () {
  modal.className = "open"
})

// })




const newDuckForm = document.querySelector("#new-duck-form")
newDuckForm.addEventListener("submit", function (event) {
  event.preventDefault()
  const duckName = event.target.name.value
  const duckImage = event.target.image_url.value
  const newDuckObj = {
    name: duckName,
    imageUrl: duckImage
  }
  renderDuckListItem(newDuckObj)
})















// Morning code
/****** DOM Elements ******/
const duckList = document.querySelector("#ducks-container")

/****** Render Helpers ******/
function renderDuckListItem(duckObj) {
  // 1. Create the DOM node
  const duckLi = document.createElement("li")

  // 2. Add any attributes it needs
  duckLi.textContent = duckObj.name
  duckLi.classList.add("item")

  // 3. Append to its parent element
  duckList.append(duckLi)
}

function renderDuckList(ducksArray) {
  ducksArray.forEach(function (duckObj) {
    renderDuckListItem(duckObj)
  })
}

/****** Initial Render ******/
renderDuckList(ducksArray)