/* Task:

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

const removeExclamationMarks = (str) => str.replace(/!/gi, '');

// Simple tests:
console.log(removeExclamationMarks("Hello World!") === "Hello World");