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
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  if (day >= 1 && day <= days.length) {
    return days[day - 1]
  } else {
    return null
  }
}

// Object Version :

let daysObj = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
}

const returnDay = (day) => {
  if (day >= 1 && day <= 7) {
    return daysObj[day]
  } else {
    return null
  }
}
