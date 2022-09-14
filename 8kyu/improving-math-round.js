/* Task:

Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

You may find the following Math methods useful:

Math.round(x) (of course)
Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)

*/

Math.roundTo = (number, precision) => +number.toFixed(precision);

// Simple tests:
console.log(Math.roundTo(3.1415926535, 4) === 3.1416);
console.log(Math.roundTo(4, 5) === 4);
console.log(Math.roundTo(4.1235343424, 6) === 4.123534);
console.log(Math.roundTo(5.3035802, 3) === 5.304);
console.log(Math.roundTo(0.9384930193848595, 15) === 0.938493019384860);
console.log(Math.roundTo(9.9999, 3) === 10);