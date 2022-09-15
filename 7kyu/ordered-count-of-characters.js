/* Task:

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/

const orderedCount = (text) => [...new Set(text)]
  .map((char) => [char, [...text].filter((ch) => ch === char).length]);

// Simple tests:
console.log(JSON.stringify(orderedCount("abracadabra")) === JSON.stringify([['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]));
console.log(JSON.stringify(orderedCount("233312")) === JSON.stringify([['2', 2], ['3', 3], ['1', 1]]));
console.log(JSON.stringify(orderedCount("Code Wars")) === JSON.stringify([['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]));