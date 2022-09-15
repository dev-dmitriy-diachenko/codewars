/* Task:

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

const countPositivesSumNegatives = (input) => {
  if (!input || !input.length) return [];
  
	let countPositive = 0;
	let sumNegatives = 0;

	input.forEach(num => {
		if (num > 0) {
			countPositive++;
		} else {
			sumNegatives += num;
		};
	});

	return [countPositive, sumNegatives];
};

// Simple tests:
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), " => [10, -65]");
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), " => [8, -50]");