/* Task:

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/

const expression = (number) => (operation) =>
	operation ? operation(number) : number;

const [zero, one, two, three, four, five, six, seven, eight, nine]
	= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => expression(num));

const plus = (right) => (left) => left + right;
const minus = (right) => (left) => left - right;
const times = (right) => (left) => left * right;
const dividedBy = (right) => (left) => parseInt(left / right);

// Simple tests:
console.log(seven(times(five())) === 35);
console.log(four(plus(nine())) === 13);
console.log(eight(minus(three())) === 5);
console.log(six(dividedBy(two())) === 3);