/*
    What you need to know :
        For Loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
        toUpperCase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
        Function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
*/

function rant(message) {
  for (let i = 1; i <= 3; i++) {
    console.log(`${message.toUpperCase()}`)
  }
}
rant('I hate peaches!')
