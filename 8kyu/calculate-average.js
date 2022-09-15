/* Task:

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

const find_average = (arr) =>
	arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

// Simple tests:
console.log(find_average([1,1,1]) === 1);
console.log(find_average([1,2,3]) === 2);
console.log(find_average([1,2,3,4]) === 2.5);