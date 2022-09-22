/* Task:

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input

customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.

output

The function should return an integer, the total time required.

*/

const queueTime = (customers, n) => {
	const w = new Array(n).fill(0);

	for (let t of customers) {
		const idx = w.indexOf(Math.min(...w));
		
		w[idx] += t;
	};
  
	return Math.max(...w);
};

// Simple tests:
console.log(queueTime([], 1) === 0);
console.log(queueTime([1, 2, 3, 4], 1) === 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2) === 9);
console.log(queueTime([1, 2, 3, 4, 5], 100) === 5);	