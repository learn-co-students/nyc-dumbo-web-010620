let ducks = []

console.log("BEFORE FETCH", ducks)

fetch("http://localhost:3000/ducks")
  .then(r => r.json())
  .then(duckData => {
    ducks = duckData
    console.log("IN FETCH", ducks)
  })

console.log("AFTER FETCH", ducks)

document.body.addEventListener("click", () => {
  console.log("IN EVENT LISTENER", ducks)
})

// function myMap(array, callbackFn) {
//   newArray = []
//   for (let index = 0; index < array.length; index++) {
//     let element = array[index]
//     let newValue = callbackFn(element)
//     newArray.push(newValue)
//   }
//   return newArray
// }

// const upperCaser = (name) => { return name.toUpperCase() }
// const arr = ["Ian", "Leizl", "Otha"]

// myMap(arr, upperCaser)

// // arr.map(upperCaser)
