/* Task:

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

*/

const smash = (words) => words.join(' ');

// Simple tests:   
console.log(smash([]) === "");
console.log(smash(["hello"]) === "hello");
console.log(smash(["hello", "world"]) === "hello world");
console.log(smash(["hello", "amazing", "world"]) === "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]) === "this is a really long sentence");