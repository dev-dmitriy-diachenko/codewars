/* Task:

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

*/

const getLength = (arr) => arr.length;

const getFirst = (arr) => arr[0];

const getLast = (arr) => arr[arr.length - 1];

const pushElement = (arr) => {
	arr.push(true);

	return arr;
};

const popElement = (arr) => {
	arr.pop();
  
	return arr;
};
	
// Simple tests:
console.log(getLength([1,2,3]) === 3);
console.log(getFirst([1,2,3]) === 1);
console.log(getLast([1,2,3]) === 3);
console.log(pushElement([1,2,3]).length === 4);
console.log(popElement([1,2,3]).length === 2);