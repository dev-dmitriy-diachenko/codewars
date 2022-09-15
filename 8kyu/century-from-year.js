/* Task:

Given a year, return the century it is in.

*/

const century = (year) => Math.ceil(year / 100);

// Simple tests:
console.log(century(1705) === 18);
console.log(century(1900) === 19);
console.log(century(1601) === 17);
console.log(century(2000) === 20);
console.log(century(89) === 1);