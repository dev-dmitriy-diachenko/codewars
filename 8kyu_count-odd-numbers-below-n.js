/* Task:

Given a number n, return the number of positive odd numbers below n, EASY!

*/

const oddCount = (n) => Math.floor(n / 2);

// Simple tests:
console.log(oddCount(15), ' => 7');
console.log(oddCount(15023),  ' => 7511');