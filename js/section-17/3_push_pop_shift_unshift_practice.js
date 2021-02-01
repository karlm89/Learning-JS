/*
    What you need to know :
        Shift - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
        Push - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
        Unshift - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
    
    Not actually used in this test but good to know : 
        Pop - https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
*/

const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'] //DO NOT TOUCH THIS LINE!

// Only here to see what the array looks like before the code
console.log(planets)

// YOUR CODE GOES BELOW THIS LINE:
planets.shift()
planets.push('Saturn')
planets.unshift('Mercury')

// Only needed for testing
console.log(planets)

// Added for understanding of Pop
console.log('Last planet in the array : ' + planets.pop())
