/* Task:

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:

input : 2 strings with substrings separated by ,
output: number as a string

*/

const mxdiflg = (a1, a2) => {
	if (!a1.length || !a2.length) return -1

	const firstLengths = a1.map(el => el.length);
	const secondLengths = a2.map(el => el.length);

	const firstMinMax = [Math.min(...firstLengths), Math.max(...firstLengths)];
	const secondMinMax = [Math.min(...secondLengths), Math.max(...secondLengths)];

	const results = [Math.abs(firstMinMax[0] - secondMinMax[1]), Math.abs(firstMinMax[1] - secondMinMax[0])];
	
	return Math.max(...results);
};

// Simple tests:
const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(s1, s2) === 13);