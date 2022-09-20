/* Task:

Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

*/

const roundToNext5 = (num) => Math.ceil(num / 5) * 5;

// Simple tests:
console.log(roundToNext5(0) === 0);
console.log(roundToNext5(2) === 5);
console.log(roundToNext5(3) === 5);
console.log(roundToNext5(12) === 15);
console.log(roundToNext5(21) === 25);
console.log(roundToNext5(30) === 30);
console.log(roundToNext5(-2) === 0);
console.log(roundToNext5(-5) === -5);