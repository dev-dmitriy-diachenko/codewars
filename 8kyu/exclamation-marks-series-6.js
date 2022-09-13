/* Task:

Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

*/

const remove = (s, n) => {
	let input = s;
	
	while (n) {
		input = input.replace(/!/, "");
		n -= 1;
	};

	return input;
};

// Simple tests:
console.log(remove("Hi!",1) === "Hi");
console.log(remove("Hi!",100) === "Hi");
console.log(remove("Hi!!!",1) === "Hi!!");
console.log(remove("Hi!!!",100) === "Hi");
console.log(remove("!Hi",1) === "Hi");
console.log(remove("!Hi!",1) === "Hi!");
console.log(remove("!Hi!",100) === "Hi");
console.log(remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi");
console.log(remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi");
console.log(remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi");
console.log(remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi");