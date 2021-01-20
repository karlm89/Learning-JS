// For Loop - When you know how many loops you will have.

// Declaration, Condition, Expression
for (let x = 1; x <= 10; x++) {
	if (x === 4) {
		console.log(x + ' is the best number ever')
		continue
	}
	if (x == 5) {
		console.log(x + ' Stop the loop')
		break
	}
	console.log('For Loop = ' + x)
}

// While Loop - When you don't know how many loops you will have.
let i = 0

// Condition only
while (i <= 10) {
	console.log('While = ' + i)
	// Expression
	i++
}

// Do While
let z = 0
do {
	console.log('Do / While = ' + z)
	z++
} while (z <= 10)
