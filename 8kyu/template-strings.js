/* Task:

Your task is to return the correct string using the Template String Feature.

Input
Two Strings, no validation is needed.

Output
You must output a string containing the two strings with the word ```' are '```

*/

const TempleStrings = (obj, feature) => `${obj} are ${feature}`;
	
// Simple tests:
console.log(TempleStrings("Animals", "Good") === 'Animals are Good');