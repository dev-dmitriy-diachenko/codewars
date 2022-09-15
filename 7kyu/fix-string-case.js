/* Task:

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

*/

const solve = (str) => {
	const lowerCasedTotal = str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0;
	const upperCasedTotal = str.match(/[A-Z]/g) ? str.match(/[A-Z]/g).length : 0;

	return lowerCasedTotal >= upperCasedTotal
		? str.toLowerCase()
		: str.toUpperCase();
};

// Simple tests:
console.log(solve("code") === "code");
console.log(solve("CODe") === "CODE");
console.log(solve("COde") === "code");
console.log(solve("Code") === "code");