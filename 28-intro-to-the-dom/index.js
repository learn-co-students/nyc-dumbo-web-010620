// Read
const header = document.querySelector("#logo")
const duckList = document.querySelector("#ducks-container")
const allLis = duckList.querySelectorAll("li")

// Update
header.textContent = "Quack City"

// Delete
// header.remove()

// Create
// Option 1: hand-crafted artisinal DOM node creation
// 1. create the dom node
// const newLi = document.createElement("li")

// // 2. set the attributes to define how it should look
// newLi.textContent = "The Professor"
// newLi.className = "item"
// newLi.id = "prof"

// // 3. put it into the DOM (find its parent)
// duckList.append(newLi)


// Option 2: innerHTML
// const main = document.querySelector("main")

// const outerDiv = document.createElement("div")
// outerDiv.id = "detail"
// outerDiv.innerHTML = `
// <h1>The Professor</h1>
// <div class="image">
//   <h2 class="rating">10</h2>
//   <img src="https://static.turbosquid.com/Preview/001213/610/JS/3D-model-rubber-duck-04_Z.jpg">
// </div>
// `























const ducksArray = [
  {
    id: 1,
    name: "The Classic",
    imageUrl: "https://static.turbosquid.com/Preview/001213/610/JS/3D-model-rubber-duck-04_Z.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "The Bodybuilder",
    imageUrl: "https://cdn11.bigcommerce.com/s-nf2x4/products/307/images/9994/muscle-builder-Rubber-Duck-Adline-1__83749.1568646563.560.850.jpg?c=2",
    rating: 2
  },
  {
    id: 3,
    name: "The DJ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ2sjQ3cEA2wIAv3zqJboSAQ_LzEqEwPF3K4IzcWW2MFPlp5hF",
    rating: 7
  },
  {
    id: 4,
    name: "The Punk",
    imageUrl: "https://i.ebayimg.com/images/g/PYkAAOSwIJFZ4Lcb/s-l400.jpg",
    rating: 7
  },
  {
    id: 4,
    name: "The Student",
    imageUrl: "https://i.ebayimg.com/images/g/PYkAAOSwIJFZ4Lcb/s-l400.jpg",
    rating: 7
  },
  {
    id: 4,
    name: "The Professor",
    imageUrl: "https://i.ebayimg.com/images/g/PYkAAOSwIJFZ4Lcb/s-l400.jpg",
    rating: 7
  }
]

function renderOneDuck(duckObj) {
  // <li class="item">The Classic</li>
  // 1. create the dom node
  const duckLi = document.createElement("li")
  // 2. adding the attributes
  duckLi.textContent = duckObj.name
  duckLi.classList.add("item")
  duckLi.classList.add("duck")

  // 3. appending to the parent element
  const duckContainer = document.querySelector("#ducks-container")
  duckContainer.append(duckLi)
}

// create a function that takes in an array of objects 
function renderDuckList(ducksArray) {
  // do something to take each duck and put it on the DOM
  ducksArray.forEach(function (duckObj) {
    renderOneDuck(duckObj)
  })
  ducksArray.forEach(renderOneDuck)
}

renderDuckList(ducksArray)