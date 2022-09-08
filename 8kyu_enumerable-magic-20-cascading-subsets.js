/* Task:

Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.

*/

const eachCons = (array, n) => {
	const result = [];

	for (let i = 0; i <= array.length - n; i++) {
		result.push(array.slice(i, i + n));
	};

	return result;
};
	
// Simple tests:
console.log(eachCons([3, 5, 8, 13, 14], 1), ' => [[3], [5], [8], [13]]');
console.log(eachCons([3, 5, 8, 13, 14], 2), ' => [[3, 5], [5, 8], [8, 13]]');
console.log(eachCons([3, 5, 8, 13, 14], 3), ' => [[3, 5, 8], [5, 8, 13]]');
console.log(eachCons([], 3), ' => []');