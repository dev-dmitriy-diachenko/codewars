/* Task:

Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

*/

const parseF = (s) => isNaN(parseFloat(s)) ? null : parseFloat(s);
	
// Simple tests:
console.log(parseF('0'));
console.log(parseF(12));
console.log(parseF(null));
console.log(parseF(undefined));
console.log(parseF(NaN));
console.log(parseF([]));
console.log(parseF({}));
console.log(parseF('   '));
console.log(parseF('abc'));
console.log(parseF('  -12.3 '));