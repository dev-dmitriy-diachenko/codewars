/* Task:

Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

*/

const trueOrFalse = (val) => !val ? 'false' : 'true';

// Simple tests:
const a = 1;
const b = 2;
const c = 1;

console.log(trueOrFalse(a > b) === "false");
console.log(trueOrFalse(a === b) === "false");
console.log(trueOrFalse(a < b) === "true");
console.log(trueOrFalse(a !== b) === "true");
console.log(trueOrFalse(b > c) === "true");
console.log(trueOrFalse(b === c) === "false");
console.log(trueOrFalse(b < c) === "false");
console.log(trueOrFalse(b !== c) === "true");
console.log(trueOrFalse(a === c) === "true");
console.log(trueOrFalse(a !== c) === "false");
//test for logical operators and bitwise operators
const t = true;
const f = false;

console.log(trueOrFalse(t && f) === "false");
console.log(trueOrFalse(f && f) === "false");
console.log(trueOrFalse(t && t) === "true");
console.log(trueOrFalse(t || f) === "true");
console.log(trueOrFalse(t || t) === "true");
console.log(trueOrFalse(f || f) === "false");
console.log(trueOrFalse(t & f) === "false");
console.log(trueOrFalse(t & t) === "true");
console.log(trueOrFalse(f & f) === "false");
console.log(trueOrFalse(t | f) === "true");
console.log(trueOrFalse(t | t) === "true");
console.log(trueOrFalse(f | f) === "false");
console.log(trueOrFalse(!t) === "false");
console.log(trueOrFalse(!f) === "true");
console.log(trueOrFalse(t ^ f) === "true");
console.log(trueOrFalse(t ^ t) === "false");
console.log(trueOrFalse(f ^ f) === "false");
//test for implicit conversion 
console.log(trueOrFalse(true) === "true");
console.log(trueOrFalse(123) === "true");
console.log(trueOrFalse("123") === "true");
console.log(trueOrFalse(["123"]) === "true");
console.log(trueOrFalse("false") === "true");
console.log(trueOrFalse(false) === "false");
console.log(trueOrFalse(0) === "false");
console.log(trueOrFalse("") === "false");
console.log(trueOrFalse(null) === "false");
console.log(trueOrFalse([].length) === "false");
console.log(trueOrFalse(undefined) === "false");