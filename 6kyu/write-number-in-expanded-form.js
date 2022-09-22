/* Task:

Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

*/

const expandedForm = (num) => [...String(num)]
	.map((num, index, arr) => num + "0".repeat(arr.length - index - 1))
	.filter(Number)
	.join(" + ");

// Simple tests:
console.log(expandedForm(12) === '10 + 2');
console.log(expandedForm(42) === '40 + 2');
console.log(expandedForm(70304) === '70000 + 300 + 4');