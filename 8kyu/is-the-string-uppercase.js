/* Task:

Complete the solution so that it reverses all of the words within the string passed in.

*/

String.prototype.isUpperCase = function () {
	return [...this].every((char) => char === char.toUpperCase());
};

// Simple tests:
console.log('c'.isUpperCase() === false);
console.log('C'.isUpperCase() === true);
console.log('hello I AM DONALD'.isUpperCase() === false);
console.log('HELLO I AM DONALD'.isUpperCase() === true);
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase() === false);
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase() === true);
console.log('Hello World'.isUpperCase() === false);
console.log('hello world'.isUpperCase() === false);
console.log('Hello world'.isUpperCase() === false);
console.log('hello World'.isUpperCase() === false);
console.log('HELLO WORLD'.isUpperCase() === true);
console.log('Bob walks his dog every day.'.isUpperCase() === false);
console.log('BOB walks his dog every day.'.isUpperCase() === false);
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase() === true);
console.log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase() === false);
console.log('#lovewins'.isUpperCase() === false);
console.log('#Lovewins'.isUpperCase() === false);
console.log('#loveWins'.isUpperCase() === false);
console.log('#LoveWins'.isUpperCase() === false);
console.log('#LOVEWins'.isUpperCase() === false);
console.log('#LoveWINS'.isUpperCase() === false);
console.log('#LOVEWINs'.isUpperCase() === false);
console.log('#lOVEWINS'.isUpperCase() === false);
console.log('#LOVEWINS'.isUpperCase() === true);