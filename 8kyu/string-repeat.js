/* Task:

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

*/

const repeatStr = (n, s) => s.repeat(n);

// Simple tests:
console.log(repeatStr(3, "*") === "***");
console.log(repeatStr(5, "#") === "#####");
console.log(repeatStr(2, "ha ") === "ha ha ");