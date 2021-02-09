// DEFINE YOUR FUNCTION BELOW:

let array = [3, 5, 7]

function lastElement(array) {
  if (array.length > 0) {
    return array.slice(-1)[0]
  } else {
    return null
  }
}

function lastElementT(array) {
  return array.length() > 0 ? array.slice(-1)[0] : null
}
