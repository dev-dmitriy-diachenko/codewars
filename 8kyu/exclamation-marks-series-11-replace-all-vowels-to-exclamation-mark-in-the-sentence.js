/* Task:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

*/

const replace = (string) => string.replace(/[aeiou]/gi, '!');

// Simple tests:   
console.log(replace("Hi!") === "H!!");
console.log(replace("!Hi! Hi!") === "!H!! H!!");
console.log(replace("aeiou") === "!!!!!");
console.log(replace("ABCDE") === "!BCD!");