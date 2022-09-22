/* Task:

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

*/

const digitalRoot = (num) => (num - 1) % 9 + 1;

// Simple tests:
console.log(digitalRoot(16) === 7);
console.log(digitalRoot(456) === 6);