/* Task:

Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.

Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:

Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

Example:

dbl_linear(10) should return 22

Note:

Focus attention on efficiency

*/

const dblLinear = (n) => {
	let ai = 0, bi = 0, eq = 0;
	const sequence = [1];
	
	while (ai + bi < n + eq) {
		const y = 2 * sequence[ai] + 1;
		const z = 3 * sequence[bi] + 1;
		
		if (y < z) {
			sequence.push(y); ai++;
		} else if (y > z) {
			sequence.push(z); bi++;
		} else {
			sequence.push(y); ai++; bi++; eq++;
		};
	};

	return sequence.pop();
};

// Simple tests:
console.log((dblLinear(10) === 22));
console.log((dblLinear(20) === 57));
console.log((dblLinear(30) === 91));
console.log((dblLinear(50) === 175));
console.log((dblLinear(100) === 447));