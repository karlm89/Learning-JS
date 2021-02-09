// DEFINE YOUR FUNCTION BELOW:

function capitalize(word) {
  word.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())
}

// Overkill version where we check to see if the word is actually a string, Incase it is not.
function capitalize(word) {
  if (typeof word == 'string') {
    return word.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())
  } else {
    return null
  }
}

// Arrow function version ... you know... for fun...
const capitalizeArrow = (word) => {
  return word.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())
}
