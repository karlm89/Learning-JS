const greet = (name) => {
  return `Hey ${name}!`
}

// Implicately returning the function
const greet = (name) => (
    `Hey ${name}!`
)

// Returning implicately in a single line.
const greet = (name) => `Hey ${name}!`

console.log(greet('Karl'))
