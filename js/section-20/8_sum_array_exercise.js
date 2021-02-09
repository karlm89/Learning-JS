// DEFINE YOUR FUNCTION BELOW:

//Function Statement
function sumArray(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum
}

// Arrow Function aka Function Expression
const sumArray = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum
}
