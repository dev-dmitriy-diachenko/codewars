/* Task:

I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

*/

const swapValues = function () {
	return arguments[0].reverse()
};
	
// Simple tests:
console.log(swapValues([1, 2]));