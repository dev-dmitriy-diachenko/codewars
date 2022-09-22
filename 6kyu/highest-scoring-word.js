/* Task:

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

*/

const high = (str) => {
	const alphabet = '_abcdefghijklmnopqrstuvwxyz';
	const arrayOfWords = str.split(' ');

	const wordsWeightArray = arrayOfWords.map(word =>
		[...word].reduce((acc, c) => acc + alphabet.indexOf(c), 0));

	const maxWeight = Math.max(...wordsWeightArray);

	return arrayOfWords[wordsWeightArray.indexOf(maxWeight)];
};

// Simple tests:
console.log(high('man i need a taxi up to ubud') === 'taxi');
console.log(high('what time are we climbing up the volcano') === 'volcano'); 
console.log(high('take me to semynak') === 'semynak');   
console.log(high('aa b') === 'aa');
console.log(high('b aa') === 'b');
console.log(high('bb d') === 'bb');
console.log(high('d bb') === 'd');
console.log(high('aaa b') === 'aaa');