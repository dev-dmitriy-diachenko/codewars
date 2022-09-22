/* Task:

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

const count = (string) => {
	const counter = {};
	
	for (const char of string) {
		if (counter[char]) {
			counter[char]++;
		} else {
			counter[char] = 1;
		};
	};

	return counter;
};

// Simple tests:
console.log(count("aba"), " => { a: 2, b: 1 }");
console.log(count(""), " => {}");