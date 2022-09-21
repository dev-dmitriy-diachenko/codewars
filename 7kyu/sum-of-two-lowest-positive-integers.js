/* Task:

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

const sumTwoSmallestNumbers = (arr) =>
	arr.sort((a, b) => a - b)[0] + arr[1];
	
	// Simple tests:
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]) === 13);
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]) === 6);
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]) === 10);
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]) === 24);
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]) === 16);