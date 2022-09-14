/* Task:

Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)

should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.

*/

const amIWilson = (p) => {
	// "The only known Wilson primes are 5, 13 and 563."
	return p === 5 || p === 13 || p === 563;
};
	
// Simple tests:
console.log(amIWilson(5) === true);
console.log(amIWilson(9) === false);
console.log(amIWilson(113) === false);