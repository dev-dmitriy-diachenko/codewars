/* Task:

Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"

If arr contains elements 5 and 13, function should return:

"It's a black array"

If arr contains neither 5 nor 13, function should return:

"It's a white array"

*/

const blackAndWhite = (arr) =>
	!Array.isArray(arr) ? "It's a fake array" :
	arr.includes(5) && arr.includes(13) ? "It's a black array" : "It's a white array";

// Simple tests:
console.log(blackAndWhite(5,13) === "It's a fake array");
console.log(blackAndWhite([5,13]) === "It's a black array");
console.log(blackAndWhite([5,12]) === "It's a white array");