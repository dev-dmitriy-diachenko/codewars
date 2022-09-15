/* Task:

Write a function to split a string and convert it into an array of words.

*/

const stringToArray = (string) => string.split(' ');

// Simple tests:
console.log(stringToArray("Robin Singh"), ' => ["Robin", "Singh"]');
console.log(stringToArray("I love arrays they are my favorite"), ' => ["I", "love", "arrays", "they", "are", "my", "favorite"]');