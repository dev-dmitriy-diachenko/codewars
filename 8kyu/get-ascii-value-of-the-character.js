/* Task:

Get ASCII value of a character.

*/

const getASCII = (char) => char.charCodeAt(0);
	
// Simple tests:
console.log(getASCII('A') === 65);
console.log(getASCII(' ') === 32);
console.log(getASCII('!') === 33);