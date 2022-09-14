/* Task:

Create a function that takes a number as an argument and returns a grade based on that number.

Score	Grade

Anything greater than 1 or less than 0.6	"F"
0.9 or greater	"A"
0.8 or greater	"B"
0.7 or greater	"C"
0.6 or greater	"D"

*/

const grader = (score) => {
	if (score > 1 || score < 0.6) return 'F';
	if (score < 0.7) return 'D';
	if (score < 0.8) return 'C';
	if (score < 0.9) return 'B';

	return 'A';
};

// Simple tests:
console.log(grader(0.7) === "C");
console.log(grader(0.9) === "A");
console.log(grader(0.6) === "D");