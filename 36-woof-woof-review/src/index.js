const dogInfoDiv = document.querySelector("#dog-info")
const dogBarDiv = document.querySelector("#dog-bar")

// fetches -> network request + parsing response
function getPups() {
  return fetch("http://localhost:3000/pups")
    .then(r => r.json())
}

function updatePup(dog) {
  return fetch(`http://localhost:3000/pups/${dog.id}`, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isGoodDog: dog.isGoodDog
    }),
  })
    .then(r => r.json())
}


// renders -> taking js objects turning them to DOM elements
function getDogText(isGoodDog) {
  let goodDogText;
  if (isGoodDog) {
    goodDogText = "Good Dog!"
  } else {
    goodDogText = "Bad Dog!"
  }
  return goodDogText
}

function renderOnePupDetail(dog) {
  // let goodDogText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
  let goodDogText = getDogText(dog.isGoodDog)
  dogInfoDiv.innerHTML = `
    <img src=${dog.image}>
    <h2>${dog.name}</h2>
    <button id="good-dog-button">${goodDogText}</button>
  `

  const dogButton = document.querySelector("#good-dog-button")
  dogButton.addEventListener("click", () => {
    // The button's text should change from Good to Bad or Bad to Good
    dog.isGoodDog = !dog.isGoodDog

    // OPTIMISTIC RENDERING => updating the DOM regardless of what happens in the fetch
    // let newText = getDogText(dog.isGoodDog)
    // dogButton.textContent = newText

    updatePup(dog)
      .then(updatedPup => {
        // PESSIMISTIC RENDERING => wait for the fetch before updating the DOM
        let newText = getDogText(dog.isGoodDog)
        dogButton.textContent = newText
      })
  })
}

function renderOnePupSpan(dog) {
  const dogSpan = document.createElement("span")
  dogSpan.textContent = dog.name

  // NESTED EVENT LISTENERS
  dogSpan.addEventListener("click", () => {
    renderOnePupDetail(dog)
  })

  dogBarDiv.append(dogSpan)
}

// initial fetch + render
getPups().then(dogsArray => {
  dogsArray.forEach(dog => {
    renderOnePupSpan(dog)
  })
})