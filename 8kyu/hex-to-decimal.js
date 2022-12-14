/* Task:

Complete the function which converts hex number (given as a string) to a decimal number.

*/

const hexToDec = (hexString) => parseInt(hexString, 16);

// Simple tests:   
console.log(hexToDec("1") === 1);
console.log(hexToDec("a") === 10);
console.log(hexToDec("10") === 16);
console.log(hexToDec("FF") === 255);
console.log(hexToDec("-C") === -12);