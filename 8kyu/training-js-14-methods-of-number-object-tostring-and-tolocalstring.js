/* Task:

Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

*/

const colorOf = (...colors) =>
	`#${colors.map(color => color.toString(16).padStart(2, 0)).join('')}`;
	
// Simple tests:
console.log(colorOf(255, 0, 0) === "#ff0000");
console.log(colorOf(0, 111, 0) === "#006f00");
console.log(colorOf(1, 2 ,3) === "#010203");