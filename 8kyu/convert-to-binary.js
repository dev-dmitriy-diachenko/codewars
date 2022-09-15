/* Task:

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

*/

const toBinary = (n) => Number(n.toString(2));

// Simple tests:   
console.log(toBinary(1) === 1);
console.log(toBinary(2) === 10);
console.log(toBinary(3) === 11);
console.log(toBinary(5) === 101);