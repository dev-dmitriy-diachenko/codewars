/* Task:

When provided with a letter, return its position in the alphabet.

*/

const position = (letter) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
	return `Position of alphabet: ${alphabet.indexOf(letter.toLowerCase()) + 1}`;
};

// Simple tests:   
console.log(position("a") === "Position of alphabet: 1");
console.log(position("z") === "Position of alphabet: 26");
console.log(position("e") === "Position of alphabet: 5");