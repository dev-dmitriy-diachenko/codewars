/* Task:

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

*/

const findUniq = (arr) => {
	const sorted = [...arr].sort((a, b) => a - b);
	
	return sorted[0] === sorted[1]
		? sorted[sorted.length - 1]
		: sorted[0];
};

// Simple tests:
console.log(findUniq([1, 0, 0]) === 1);
console.log(findUniq([0, 1, 0]) === 1);
console.log(findUniq([0, 0, 1]) === 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]) === 2);
console.log(findUniq([1, 1, 2, 1, 1]) === 2);
console.log(findUniq([3, 10, 3, 3, 3]) === 10);