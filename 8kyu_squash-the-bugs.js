/* Task:

Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

*/

const findLongest = (str) => str.split(' ')
	.sort((a, b) => b.length - a.length)[0].length;
	
// Simple tests:
console.log(findLongest("The quick white fox jumped around the massive dog") === 7);
console.log(findLongest("Take me to tinseltown with you") === 10); 
console.log(findLongest("Sausage chops") === 7); 
console.log(findLongest("Wind your body and wiggle your belly") === 6); 
console.log(findLongest("Lets all go on holiday") === 7); 