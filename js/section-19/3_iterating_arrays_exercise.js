/*
	What you need to know :
		For Loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for	
		Array Length - https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/length
		toUpperCase() - https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'] //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

// not equal to since that would go passed the index of the array. Which would result in 'undefined' in the console.
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase())
}
