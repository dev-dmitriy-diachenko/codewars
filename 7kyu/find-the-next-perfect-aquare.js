/* Task:

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

const findNextSquare = (num) =>
	Math.sqrt(num) % 1 ? -1 : (Math.sqrt(num) + 1) ** 2;

	// Simple tests:
console.log(findNextSquare(121) === 144);
console.log(findNextSquare(625) === 676);
console.log(findNextSquare(319225) === 320356);
console.log(findNextSquare(15241383936) === 15241630849);
console.log(findNextSquare(155) === -1);
console.log(findNextSquare(342786627) === -1);