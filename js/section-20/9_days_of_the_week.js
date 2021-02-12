// DEFINE YOUR FUNCTION BELOW:

// God, I hate switch statements... Also, unrealated, everyone knows 'Sunday' is the first day of the week.
const returnDay = (day) => {
  switch (day) {
    case 1:
      return 'Monday'
      break
    case 2:
      return 'Tuesday'
      break
    case 3:
      return 'Wednesday'
      break
    case 4:
      return 'Thursday'
      break
    case 5:
      return 'Friday'
      break
    case 6:
      return 'Saturday'
      break
    case 7:
      return 'Sunday'
      break
    // Return Null as default...
    default:
      return null
  }
}

// Shorter clearner way, and you don't have to use a switch statement.
const returnDay = (day) => {
  let dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  if (day >= 1 && day <= 7) {
    return dayArray[day - 1]
  } else {
    return null
  }
}
