/* Task:

Your task is to write function factorial.

*/

const factorial = (num) => {
	const arr = [];
  
	while (num) {
		arr.push(num);
		num--;
	};
  
	return arr.reduce((a, b) => a * b, 1);
};

// Simple tests:
console.log(factorial(0) === 1);
console.log(factorial(1) === 1);
console.log(factorial(4) === 24);
console.log(factorial(7) === 5040);
console.log(factorial(17) === 355687428096000);