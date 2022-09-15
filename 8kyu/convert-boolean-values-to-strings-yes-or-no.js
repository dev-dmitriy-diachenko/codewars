/* Task:

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/

const boolToWord = (bool) => bool ? 'Yes' : 'No';

// Simple tests:
console.log(boolToWord(true) === 'Yes');
console.log(boolToWord(false) === 'No');