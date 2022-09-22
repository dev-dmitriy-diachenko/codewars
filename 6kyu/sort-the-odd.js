/* Task:

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

*/

const sortArray = (array) => {
	const oddsSorted = array
		.filter((num) => num % 2)
  	.sort((prev, next) => prev - next);

  return array.map((num) => num % 2 ? oddsSorted.shift() : num)
};

// Simple tests:
console.log(sortArray([5, 3, 2, 8, 1, 4]), " => [1, 3, 2, 8, 5, 4]");
console.log(sortArray([5, 3, 1, 8, 0]), " => [1, 3, 5, 8, 0]");
console.log(sortArray([]), " => []");