/* Task:

Complete the function which converts a binary number (given as a string) to a decimal number.

*/

const binToDec = (bin) => parseInt(bin, 2);

// Simple tests:
console.log(binToDec('1'), ' => 1');
console.log(binToDec('0'), ' => 0');
console.log(binToDec('11'), ' => 3');
console.log(binToDec('1001001'), ' => 73');