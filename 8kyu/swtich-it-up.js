/* Task:

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

*/

const switchItUp = (num) => {
	const numWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

	return numWord[num];
};

// Simple tests:
console.log(switchItUp(1) === "One");
console.log(switchItUp(3) === "Three");
console.log(switchItUp(5) === "Five");