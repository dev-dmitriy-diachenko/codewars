/* Task:

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

*/

const uniTotal = (string) => {
	let result = 0;

	for (const char of string) {
		result += char.charCodeAt(0);
	};

	return result;
};
	
// Simple tests:
console.log(uniTotal('aaa') === 291);
console.log(uniTotal('bbb') === 294);