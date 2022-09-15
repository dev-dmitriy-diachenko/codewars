/* Task:

Complete the solution so that it reverses the string passed into it.

*/

const solution = (str) => [...str].reverse().join('')

// Simple tests:
console.log(solution('world') === 'dlrow');
console.log(solution('hello') === 'olleh');
console.log(solution('') === '');
console.log(solution('h') === 'h');