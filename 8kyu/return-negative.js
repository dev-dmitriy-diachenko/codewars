/* Task:

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

*/

const makeNegative = num => num < 0 ? num : -num;

// Simple tests:
console.log(makeNegative(42) === -42);