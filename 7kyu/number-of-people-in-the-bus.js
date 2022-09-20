/* Task:

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

*/

const number = (busStops) =>
	busStops.reduce((res, busStop) => res + busStop[0] - busStop[1], 0);

// Simple tests:
console.log(number([[10, 0], [3, 5], [5, 8]]) === 5);
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) === 17);
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]) === 21);
console.log(number([[0, 0]]) === 0);