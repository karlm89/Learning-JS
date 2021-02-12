let hours = 0
let minutes = 0
let isRunning = true

function resetTime() {
  hours = 0
  minutes = 0
}

function calculateTime(hours, minutes) {
  totalTime = (hours * 60 + minutes) / 60

  hours = Math.floor(totalTime)
  let newMinutes = ((((totalTime * 10) % 10) / 10) * 60) / 1
  minutes = newMinutes.toFixed(0)

  // Add Leading zeros if the length is lower than 2
  if (minutes.length < 2) {
    minutes = '0' + minutes
  }

  if (hours >= 24) {
    let days = Math.floor(hours / 24)
    hours = hours - days * 24
    return `${days} day(s) : ${hours} hour(s) : ${minutes} minute(s) == ${totalTime}`
  }

  return `${hours}:${minutes} OR ${totalTime}`
  isRunning = false
}
