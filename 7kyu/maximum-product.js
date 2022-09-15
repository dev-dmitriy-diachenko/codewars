/* Task:

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

*/

const adjacentElementsProduct = (array) => {
	const multiplies = [];
  
	for (let i = 0; i < array.length - 1; i++) {
		multiplies.push(array[i] * array[i + 1]);
	};
  
	return Math.max(...multiplies);
};

// Simple tests:
console.log(adjacentElementsProduct([5, 8]) === 40);
console.log(adjacentElementsProduct([1, 2, 3]) === 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]) === 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]) === 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]) === 6);