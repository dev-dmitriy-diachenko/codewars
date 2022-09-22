/* Task:

Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements

You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

*/

const isPrime = num => {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
		if (num % i === 0) {
			return false;
		};
	};		
	
	return num > 1;
};

// Simple tests:
console.log(isPrime(0) ===  false);
console.log(isPrime(1) ===  false);
console.log(isPrime(2) ===  true);
console.log(isPrime(73) === true);
console.log(isPrime(75) === false);
console.log(isPrime(-1) === false);
console.log(isPrime(3) === true);
console.log(isPrime(5) ===  true);
console.log(isPrime(7) ===  true);
console.log(isPrime(41) === true);
console.log(isPrime(5099) === true);
console.log(isPrime(4) ===  false);
console.log(isPrime(6) ===  false);
console.log(isPrime(8) ===  false);
console.log(isPrime(9) === false);
console.log(isPrime(45) === false);
console.log(isPrime(-5) === false);
console.log(isPrime(-8) === false);
console.log(isPrime(-41) === false);