/* Task:

Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

*/

const flattenAndSort = (array) => [].concat(...array).sort((a, b) => a - b);

// Simple tests:
console.log(JSON.stringify(flattenAndSort([])) === JSON.stringify([]));
console.log(JSON.stringify(flattenAndSort([[], []])) === JSON.stringify([]));
console.log(JSON.stringify(flattenAndSort([[], [1]])) === JSON.stringify([1]));
console.log(JSON.stringify(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(JSON.stringify(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])) === JSON.stringify([1, 2, 3, 4, 5, 6, 100]));