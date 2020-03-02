// Bronze Age OOJS
// function Dog(name, favSnacks) {
//   this.name = name
//   this.favSnacks = favSnacks

//   // this.speak = function () {
//   //   console.log('am i talking here?')
//   // }
// }

// Dog.prototype.speak = function () {
//   console.log("look who's talkin now")
// }

// const allDogs = []

class Dog {

  static all = []

  constructor(name, favSnacks) {
    this.name = name
    this.favSnacks = favSnacks
    Dog.all.push(this)
  }

  sayFavSnax() {
    this.favSnacks.forEach((snack) => this.printFavSnack(snack))
  }

  printFavSnack = (snack) => {
    console.log(`${this.name} likes ${snack}`)
  }

  speak() {
    console.log(`woof my name is ${this.name}`)
  }

  static find(name) {
    return Dog.all.find(dog => dog.name === name)
  }
}


const dog1 = new Dog("fezzik", ['peanut butter', 'soccer balls'])
const dog2 = new Dog("spinny", ['spinach', 'tennis balls'])