/* 
    What you need to know : 
        Slice - https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
        Replace - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/

// DON'T TOUCH THIS LINE! (please)
const word = 'skateboard' //Don't change this line!

// 0 1 2 3 4 5 6 7 8 9
// s k a t e b o a r d

// YOUR CODE BELOW THIS LINE:
const facialHair = word.slice(5).replace('o', 'e')

console.log(facialHair)
