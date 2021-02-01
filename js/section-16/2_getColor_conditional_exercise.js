/*
	What you need to know :
		Function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
		if...else - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
		else if - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#description
*/

function getColor(phrase) {
	//WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
	if (phrase === 'stop') {
		console.log('red')
	} else if (phrase === 'slow') {
		console.log('yellow')
	} else if (phrase === 'go') {
		console.log('green')
	} else {
		console.log('purple')
	}
	//AND THIS LINE ↑↑↑↑↑
}

getColor('hello')
