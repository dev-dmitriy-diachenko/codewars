/* Task:

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

// Simple tests:
console.log(sum([]) === 0);
console.log(sum([1, 5.2, 4, 0, -1]) === 9.2);