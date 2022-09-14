/* Task:

Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
*/

const cutIt = (arr) => {
	const shortest = [...arr].sort((a, b) => a.length - b.length)[0];

	return arr.map(str => str.slice(0, shortest.length));
};
	
// Simple tests:
console.log(
	JSON.stringify(cutIt(["ab","cde","fgh"])) === JSON.stringify(["ab","cd","fg"])
);
console.log(
	JSON.stringify(cutIt(["abc","defgh","ijklmn"])) === JSON.stringify(["abc","def","ijk"])
);
console.log(
	JSON.stringify(cutIt(["codewars","javascript","java"])) === JSON.stringify(["code","java","java"])
);