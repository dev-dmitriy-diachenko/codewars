/* Task:

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

*/

const getDivisorsCnt = num => {
	let res = 0;

	for (let i = num; i > 0; i--) {
		if (num % i === 0) res++;
	};

	return res;
};

// Simple tests:
console.log(getDivisorsCnt(1) === 1);
console.log(getDivisorsCnt(10) === 4);
console.log(getDivisorsCnt(11) === 2);
console.log(getDivisorsCnt(54) === 8);