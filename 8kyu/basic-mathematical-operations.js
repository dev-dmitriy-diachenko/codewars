/* Task:

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

*/

const basicOp = (operation, value1, value2) => {
	switch (operation) {
		case '+': return value1 + value2;
		case '-': return value1 - value2;
		case '*': return value1 * value2;
		case '/': return value1 / value2;
	};
};

// Simple tests:
console.log(basicOp('+', 4, 7) === 11);
console.log(basicOp('-', 15, 18) === -3);
console.log(basicOp('*', 5, 5) === 25);
console.log(basicOp('/', 49, 7) === 7);