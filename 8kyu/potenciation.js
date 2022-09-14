/* Task:

The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note : zero to the power of zero equals one in this kata

Great coding <3

*/

const power = (x, y) => x ** y;

// Simple tests:
console.log(power(1,701270) === 1);
console.log(power(2,2) === 4);
console.log(power(3,2) === 9);
console.log(power(-1,40) === 1);  