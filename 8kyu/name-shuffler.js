/* Task:

Write a function that returns a string in which firstname is swapped with last name.

*/

const nameShuffler = (str) => str.split(' ').reverse().join(' ');

// Simple tests:   
console.log(nameShuffler('john McClane') === 'McClane john');
console.log(nameShuffler('Mary jeggins') === 'jeggins Mary');
console.log(nameShuffler('tom jerry') === 'jerry tom');