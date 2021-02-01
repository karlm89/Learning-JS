/*
    What you need to know :
        if...else - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
        Sameness - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
*/

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102 // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// DO NOT TOUCH ANYTHING BELOW (please)
if (num <= 100) {
	if (num >= 50) {
		console.log('HEY!')
	}
} else {
	if (num < 103) {
		if (num % 2 === 0) {
			console.log('YOU GOT ME!')
		}
	}
}
