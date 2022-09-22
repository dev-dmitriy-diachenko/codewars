/* Task:

Complete the solution so that the function will break up camel casing, using a space between words.

*/

const solution = (string) => string.replace(/([A-Z])/g, ' $1');

// Simple tests:
console.log(solution('camelCasing') === 'camel Casing');
console.log(solution('camelCasingTest') === 'camel Casing Test');