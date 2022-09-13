/* Task:

Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

*/

const none = (arr, fun) => arr.every(el => !fun(el));

// Simple tests:
console.log(none([1,2,3,4,5],function(item) { return item > 5 }) === true);
console.log(none([1,2,3,4,5],function(item) { return item > 4 }) === false);