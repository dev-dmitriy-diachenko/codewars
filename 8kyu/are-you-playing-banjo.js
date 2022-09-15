/* Task:

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.

*/

const areYouPlayingBanjo = (name) => {
	let firstLetter = name.charAt(0).toLowerCase();
	
	if (firstLetter !== 'r') {
		return `${name} does not play banjo`;
	} else {
		return `${name} plays banjo`
	};
};

// Simple tests:
console.log(areYouPlayingBanjo("Adam") === "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul") === "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo") === "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo") === "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf") === "rolf plays banjo");