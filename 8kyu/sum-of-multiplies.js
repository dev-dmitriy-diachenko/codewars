/* Task:

Find the sum of all multiples of n below m

*/

const sumMul = (n, m) => {
	let tmp = n;
	const arr = [];

	for (let i = 1; tmp < m - n; i++) {
		tmp = n * i;
		arr.push(tmp);
	};

	return arr.length ? arr.reduce((a, b) => a + b) : 'INVALID';
};

// Simple tests:   
console.log(sumMul(0, 0) === "INVALID");
console.log(sumMul(2, 9) === 20);
console.log(sumMul(4, -7) === "INVALID");