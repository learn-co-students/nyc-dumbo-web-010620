// regular fn
function sayHi(name) {
  return `hi ${name}`
}

// arrow fns
const arrowSayHi = (name) => {
  return `hi ${name}`
}

// one-line
const oneLine = (name) => `hi ${name}`

// multiple args
// multi-line
const multiLine = (num1, num2) => {
  const added = num1 + num2
  return added * 2
}

// one arg
const double = num => num * 2


// useful for callbacks!
const arr = [1, 2, 3]
arr.map(num => num * 3)

arr.map(function (num) {
  return num * 3
})