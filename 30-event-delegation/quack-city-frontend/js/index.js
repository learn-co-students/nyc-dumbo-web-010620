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
  const form = event.target
  const duckName = form.name.value
  const duckImage = form.image_url.value
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
function renderDuckDetail(duckObj) {
  const detailDiv = document.querySelector("#detail")
  detailDiv.innerHTML = `
    <h1>${duckObj.name}</h1>
    <div class="image">
      <h2 class="rating">${duckObj.rating}</h2>
      <img src="${duckObj.imageUrl}">
    </div>
    <h2>Rate That Duck</h2>
    <form id="score-form" data-id="7">
      <input type="number" name="score" value="${duckObj.rating}" min="0" max="10" step="1">
      <input type="submit" value="Rate">
    </form>
  `
}

function renderDuckListItem(duckObj) {
  // 1. Create the DOM node
  const duckLi = document.createElement("li")
  // 2. Add any attributes it needs
  duckLi.classList.add("item")

  const innerSpan = document.createElement("span")
  innerSpan.className = "name"
  innerSpan.textContent = duckObj.name

  innerSpan.dataset.id = duckObj.id
  innerSpan.dataset.whatever = "cool"

  duckLi.append(innerSpan)

  const deleteButton = document.createElement("button")
  deleteButton.className = "delete"
  deleteButton.textContent = "X"
  duckLi.append(deleteButton)

  // duckLi.innerHTML = `
  //    <span class="name">${duckObj.name}</span>
  //    <button class="delete">X</button>
  // `

  // NESTED EVENT LISTENERS
  // deleteButton.addEventListener("click", () => {
  //   duckLi.remove()
  // })

  // innerSpan.addEventListener("click", () => {
  //   renderDuckDetail(duckObj)
  // })


  // duckLi.textContent = duckObj.name

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
renderDuckDetail(ducksArray[0])

// EVENT DELEGATION
// 1. find a stable parent (something always on the DOM) to attach event listener to
duckListUl.addEventListener("click", event => {
  // 2. use conditional logic to figure out which child element you care about
  if (event.target.className === "name") {
    // 3. run whatever code based on that element being clicked
    const duckId = parseInt(event.target.dataset.id)
    const duckObj = ducksArray.find(duck => duck.id === duckId)
    renderDuckDetail(duckObj)
  }

  if (event.target.className === "delete") {
    const duckLi = event.target.closest(".item")
    duckLi.remove()
  }
})
