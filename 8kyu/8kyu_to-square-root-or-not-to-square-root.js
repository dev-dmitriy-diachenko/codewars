/* Task:

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes
The input array will always contain only positive numbers, and will never be empty or null.

*/

const squareOrSquareRoot = (array) => array.map(num =>
	Math.sqrt(num) % 1 ? num ** 2 : Math.sqrt(num));

// Simple tests:
const input1 = [ 4, 3, 9, 7, 2, 1 ];
const expected1 = [ 2, 9, 3, 49, 4, 1 ];
console.log(squareOrSquareRoot(input1), ` => ${expected1}`);
    
const input2 = [ 100, 101, 5, 5, 1, 1 ];
const expected2 = [ 10, 10201, 25, 25, 1, 1 ];
console.log(squareOrSquareRoot(input2), ` => ${expected2}`);
    
const input3 = [ 1, 2, 3, 4, 5, 6 ];
const expected3 = [ 1, 4, 9, 2, 25, 36 ];
console.log(squareOrSquareRoot(input3), ` => ${expected3}`);