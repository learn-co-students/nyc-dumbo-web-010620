console.log('%cHELLO WORLD', 'color: green')
console.log('%cHELLO WORLD', 'color: red')
console.log('%cHELLO WORLD', 'color: blue')

// when will this code be executed?
let aCoolVariable = "😎"
// debugger


/**** data types ****/

/**** truthy/falsey values ****/

/**** pass by reference vs pass by value ****/
let cheese = { name: "mozz" }
let alsoCheese = cheese // pass by reference
alsoCheese.name = "parm"
cheese.name // parm



/**** arrays and objects ****/
let arr = [1, 2, 3]

function arrayPusher(array, num) {
  array.push(num)
  return array
}



/**** function definition vs invocation ****/
function sayHi() {
  console.log("hi")
  return 10
}

let a = sayHi() //function invocation
let b = sayHi // function definition

sayHi.wat = "hm" // functions are first-class citizens of JS 

console.log(a)

// def say_hi
//   puts "hi"
//   10
// end

// a = say_hi

// puts a