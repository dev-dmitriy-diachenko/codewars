/* Task:

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

*/

const take = (arr, n) => arr.slice(0, n);
	
// Simple tests:
console.log(take([0, 1, 2, 3, 4, 5, 6], 5), ' => [0, 1, 2, 3, 4]');