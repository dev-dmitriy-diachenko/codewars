/* Task:

Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

*/

const find = (arr, el) => 
  arr.indexOf(el) >= 0 ? arr.indexOf(el) : 'Not found';
		
// Simple tests:
const array1 = [2,3,5,7,11];
console.log(find(array1, 5) === 2);
console.log(find(array1, 11) === 4);
console.log(find(array1, 3) === 1);
console.log(find(array1, 2) === 0);
console.log(find(array1, 7) === 3);
console.log(find(array1, 1) === "Not found");
console.log(find(array1, 8) === "Not found");

const array2 = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
console.log(find(array2, "Hello World") === 1);
console.log(find(array2, "lorem ipsum") === "Not found");
console.log(find(array2, "Lorem Ipsum") === 3);
console.log(find(array2, false) === 2);
console.log(find(array2, true) === 0);
console.log(find(array2, Math.PI) === 5);
console.log(find(array2, 3.14) === "Not found");
console.log(find(array2, 6) === 4);