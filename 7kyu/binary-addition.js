/* Task:

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

*/

const addBinary = (a, b) => (a + b).toString(2);

// Simple tests:
console.log(addBinary(1, 1) === "10");
console.log(addBinary(5, 9) === "1110");