/* Task:

You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

*/

const rangeBitCount = (a, b) =>
	Array.from({ length: ++b - a }, (_, i) => (i + a).toString(2))
		.join('')
		.match(/1/g)
		.length;

// Simple tests:
console.log(rangeBitCount(2, 7), 11);
console.log(rangeBitCount(0, 1), 1);
console.log(rangeBitCount(4, 4), 1);