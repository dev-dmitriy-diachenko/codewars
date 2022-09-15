/* Task:

Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example

Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

*/

const pipeFix = (numbers) => {
	const res = [];

	for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
		res.push(i);
	};

	return res;
};

// Simple tests:
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]), " =>[1,2,3,4,5,6,7,8,9]");
console.log(pipeFix([1, 2, 3, 12]), " =>[1,2,3,4,5,6,7,8,9,10,11,12]");
console.log(pipeFix([6, 9]), " =>[6,7,8,9]");
console.log(pipeFix([-1, 4]), " =>[-1,0,1,2,3,4]");
console.log(pipeFix([1, 2, 3]), " =>[1,2,3]");