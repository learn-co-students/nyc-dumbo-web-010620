function whatsThis() {
  console.log("THIS IS:", this)
}

function speak(greeting) {
  console.log(`${greeting} my name is ${this.firstName}`)
}

// function sayFavSnax() {
//   console.log("OUTSIDE forEach, this is: ", this)
//   this.favSnacks.forEach(
//     (snack) => {
//       console.log("INSIDE forEach, this is: ", this)

//       this.favSnacks.forEach(function () {
//         console.log("INSIDE INSIDE forEach, this is: ", this)
//       })
//     }
//   )
//   // this.favSnacks.forEach(
//   //   function (snack) {
//   //     console.log("INSIDE forEach, this is: ", this)
//   //     // console.log(`${this.firstName} likes ${snack}`)
//   //   }.bind(this)
//   // )
// }

// const dog = {
//   name: 'fezzik',
//   favSnacks: ['peanut butter', 'soccer balls'],
//   speak: speak,
//   // sayFavSnax: sayFavSnax
// }

// const dog2 = {
//   firstName: 'spinny',
//   favSnacks: ['spinach', 'tennis balls'],
//   speak: speak,
//   // sayFavSnax: sayFavSnax
// }

// PREHISTORIC OOJS
// factory function
function createDog(firstName, favSnacks) {
  return {
    firstName: firstName,
    favSnacks: favSnacks,
    speak: speak
  }
}
// const dog = createDog("fezzik", ['peanut butter', 'soccer balls'])
// const dog2 = createDog("spinny", ['spinach', 'tennis balls'])

// Bronze Age OOJS
// function Dog(firstName, favSnacks) {
//   this.firstName = firstName
//   this.favSnacks = favSnacks
//   this.speak = speak
// }


// Modern OOJS
class Dog {
  constructor(firstName, favSnacks) {
    this.firstName = firstName
    this.favSnacks = favSnacks
    this.speak = speak
  }
}

const dog = new Dog("fezzik", ['peanut butter', 'soccer balls'])
const dog2 = new Dog("spinny", ['spinach', 'tennis balls'])