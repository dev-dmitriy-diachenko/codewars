/* Task:

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

*/

const grow = (x) => x.reduce((a, b) => a * b);

// Simple tests:
console.log(grow([1, 2, 3]) === 6);
console.log(grow([4, 1, 1, 1, 4]) === 16); 
console.log(grow([2, 2, 2, 2, 2, 2]) === 64);