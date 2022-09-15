/* Task:

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/

const distinct = (arr) => [...new Set(arr)];

// Simple tests:   
console.log(distinct([1]), " => [1]");
console.log(distinct([1,2]), " => [1,2]");
console.log(distinct([1,1,2]), " => [1,2]");