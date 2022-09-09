/* Task:

This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

*/

const solve = (x, y) => x / y;
	
// Simple tests:
console.log(solve(2, 1) === 2);
console.log(solve(2, 4) === 0.5);
console.log(solve(42, 0) === Infinity);
console.log(solve(0, 8) === 0);
console.log(solve(7, 2) === 3.5);
console.log(solve(4.2, 1) === 4.2);
console.log(solve(9999, 11) === 909);