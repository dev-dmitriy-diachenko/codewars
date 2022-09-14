/* Task:

Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.

*/

const fiveLine = (s) =>
	[...Array(5)].map((el, i) => s.trim().repeat(i + 1)).join('\n');
	

// Simple tests:
console.log(fiveLine("  a") === "a\naa\naaa\naaaa\naaaaa");
console.log(fiveLine("\txy \n") === "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
console.log(fiveLine("           Ok               ") === "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");