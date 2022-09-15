/* Task:

Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

*/

const remainder = (n, m) => Math.max(n, m) % Math.min(n, m);

// Simple tests:   
console.log(remainder(17,5) === 2);
console.log(remainder(13, 72) === remainder(72, 13));