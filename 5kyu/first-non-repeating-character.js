/* Task:

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/

const firstNonRepeatingLetter = (s) => {
	const counter = {};

	for (const char of s.toLowerCase()) {
		if (!counter[char]) {
			counter[char] = 1;
		} else {
			counter[char]++;
		};
	};

	const uniques = Object.entries(counter)
		.filter(entry => entry[1] === 1)
		.map(entry => entry[0]);
	
	const firstUnique = uniques.length ? uniques[0] : '';
	const regExp = new RegExp(firstUnique, 'gi')

	return s.match(regExp)[0];
};``
		
// Simple tests:
console.log(firstNonRepeatingLetter('a') === 'a');
console.log(firstNonRepeatingLetter('stress') === 't');
console.log(firstNonRepeatingLetter('moonmen') === 'e');