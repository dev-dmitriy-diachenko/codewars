/* Task:

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

const validParentheses = (parens) => {
	let n = 0;
	
	for (let i = 0; i < parens.length; i++) {
		if (parens[i] === '(') n++;
		if (parens[i] === ')') n--;
		if (n < 0) return false;
	};

	return n === 0;
};

// Simple tests:
console.log(validParentheses("(") === false);
console.log(validParentheses(")") === false);
console.log(validParentheses("") === true);
console.log(validParentheses("()") === true);
console.log(validParentheses("())") === false);