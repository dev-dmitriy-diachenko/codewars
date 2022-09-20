/* Task:

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

*/

const getSum = (a, b) =>
	(Math.abs(a - b) + 1) * (a + b) / 2;

// Simple tests:
console.log(getSum(0, -1) === -1);
console.log(getSum(0, 1) === 1);