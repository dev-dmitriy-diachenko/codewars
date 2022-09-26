/* Task:

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

*/

const zeros = (num) =>
	num / 5 < 1 ? 0 : Math.floor(num / 5) + zeros(num / 5);

// Simple tests:
console.log(zeros(0) === 0);
console.log(zeros(5) === 1);
console.log(zeros(6) === 1);
console.log(zeros(30) === 7);