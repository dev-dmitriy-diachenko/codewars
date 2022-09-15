/* Task:

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/

const digitize = (n) => [...n.toString()].reverse().map(Number);

// Simple tests:
console.log(digitize(35231), " => [1, 3, 2, 5, 3]");
console.log(digitize(0), " => [0]");