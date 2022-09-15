/* Task:

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

*/

const greet = (name) =>
	`Hello, ${name} how are you doing today?`;

// Simple tests:
console.log(greet("Ryan") === "Hello, Ryan how are you doing today?");
console.log(greet("Shingles") === "Hello, Shingles how are you doing today?");