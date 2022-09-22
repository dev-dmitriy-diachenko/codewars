/* Task:

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

*/

const duplicateCount = (text) => [...text.toLowerCase()]
	.filter((val, i, arr) =>
		arr.indexOf(val) !== i && arr.lastIndexOf(val) === i).length;

// Simple tests:
console.log(duplicateCount("") === 0);
console.log(duplicateCount("abcde") === 0);
console.log(duplicateCount("aabbcde") === 2);
console.log(duplicateCount("aabBcde") === 2);
console.log(duplicateCount("Indivisibility") === 1);
console.log(duplicateCount("Indivisibilities") === 2);