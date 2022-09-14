/* Task:

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

*/

const isDigit = (str) => str == parseFloat(str);
	
// Simple tests:
console.log(isDigit("3"));
console.log(isDigit("  3  "));
console.log(isDigit("-3.23"));
console.log(isDigit("3-4"));
console.log(isDigit("  3   5"));
console.log(isDigit("3 5"));
console.log(isDigit("zero"));
console.log(isDigit("-0"));