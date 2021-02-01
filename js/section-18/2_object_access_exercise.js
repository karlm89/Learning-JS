/*
	What you need to know :
		Accessing Object Properities by PropertyName - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties	
*/

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
	name: 'Ichiran Ramen',
	address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
	city: 'Brooklyn',
	state: 'NY',
	zipcode: '11206',
}
//YOUR CODE GOES DOWN HERE:

let fullAddress = restaurant.address + ', ' + restaurant.city + ', ' + restaurant.state + ' ' + restaurant.zipcode

// Here is how to do the samething using the cleaner Template Literal method
let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`