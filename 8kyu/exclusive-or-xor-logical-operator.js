/* Task:

Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

*/

const xor = (a, b) => a !== b;

// Simple tests:   
console.log(xor(false, false) === false);
console.log(xor(true, false) === true);
console.log(xor(false, true) === true);
console.log(xor(true, true) === false);
console.log(xor(true, true) !== true);
