/* Task:

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

*/

const shortcut = (string) => string.replace(/[aeiou]/g, '');

// Simple tests:   
console.log(shortcut('hello') === 'hll');
console.log(shortcut('how are you today?') === 'hw r y tdy?');
console.log(shortcut('complain') === 'cmpln');
console.log(shortcut('never') === 'nvr');