// /******* JS vs Ruby *******/
// // var fruit
// // console.log(fruit)
// // fruit = "water"
// // console.log(fruit)

// // console.log(fruit)
// // let fruit = "water"
// // console.log(fruit)

// // var fruitVar;
// // console.log(fruitVar)
// // fruitVar = "water"
// // console.log(fruitVar)




// // global scope
// // let fruit = "water"

// // function sayHi() {
// //   // function scope
// //   fruit = "banana"
// //   let firstName = "ian"
// //   console.log(`hi class lol, here's some ${fruit}`)

// //   innerFn()
// //   // inner function
// //   function innerFn() {
// //     // nested function scope
// //     console.log("firstName inside innerFn fn", firstName)
// //   }

// // }


// // sayHi()

// // console.log("firstName outside fn", firstName)

// // console.log("before fn", fruit) // water // water
// // sayHi()
// // console.log("after fn", fruit) // water // banana


// /******* Hoisting *******/

// /******* var, let, const, (global) *******/

// /******* Lexical Scoping *******/

// /******* global vs function vs block scope *******/

// /******* scope in nested functions *******/











// /******* 1st Class Functions *******/
// // 1. functions can be assigned to a variable
function sayHi(name = "def") {
  console.log('hi ' + name)
}

sayHi("Leizl")

const alsoHi = sayHi

undefined()
alsoHi()

// // 2. functions can be passed around as arguments to other functions
// function fnCaller(callback) {
//   callback()
// }



// fnCaller(sayHi)

// // function logNums(num) {
// //   console.log(num)
// // }

// // const arr = ["cat", 2, "huh"]
// // arr.forEach(function (element, index, array) {
// //   console.log(element, index)
// // })

function doubler(num) {
  return num * 2
}

function tripler(num) {
  num * 3
}

function kittens(num) {
  console.log(num)
}

const nums = [2, 3, 6]
const doubled = nums.map(doubler)

// forEach under the hood
function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

console.log(doubled)

// 3. functions can be returned from functions
function funCeption() {

  return function innerFn() {

    console.log("hit me with your best shot")
  }

}

// IIFE
(function () {
  return 10
})()

function multiplyByX(x) {
  return function (num) {
    return num * x
  }
}


/******* Array methods *******/
