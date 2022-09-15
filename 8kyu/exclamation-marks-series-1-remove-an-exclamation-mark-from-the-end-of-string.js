/* Task:

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

*/

const remove = string => {
	if (string[string.length - 1] === '!') return string.slice(0, -1);
	
	return string;
};

// Simple tests:   
console.log(remove("Hi!") === "Hi");
console.log(remove("Hi!!!") === "Hi!!");
console.log(remove("!Hi") === "!Hi");
console.log(remove("!Hi!") === "!Hi");
console.log(remove("Hi! Hi!") === "Hi! Hi");
console.log(remove("Hi") === "Hi");