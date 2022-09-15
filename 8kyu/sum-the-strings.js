/* Task:

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

*/

const sumStr = (a, b) => (Number(a) + Number(b)).toString();

// Simple tests:
console.log(sumStr("4","5") === "9");
console.log(sumStr("34","5") === "39");