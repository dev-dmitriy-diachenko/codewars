/* Task:

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

*/

const pigIt = (str) => str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")

// Simple tests:
console.log(pigIt('Pig latin is cool') === 'igPay atinlay siay oolcay');
console.log(pigIt('This is my string') === 'hisTay siay ymay tringsay');