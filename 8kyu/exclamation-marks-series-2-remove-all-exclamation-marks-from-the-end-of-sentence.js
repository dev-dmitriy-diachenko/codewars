/* Task:

Remove all exclamation marks from the end of sentence.

*/

const remove = (string) => string.replace(/!+$/g, '');

// Simple tests:   
console.log(remove("Hi!") === "Hi");
console.log(remove("Hi!!!") === "Hi");
console.log(remove("!Hi") === "!Hi");
console.log(remove("!Hi!") === "!Hi");
console.log(remove("Hi! Hi!") === "Hi! Hi");
console.log(remove("Hi") === "Hi");