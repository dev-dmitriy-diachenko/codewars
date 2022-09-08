/* Task:

Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

*/

const howManyDalmatians = (number) => {
	const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

	if (number <= 10) return dogs[0];
	if (number <= 50) return dogs[1];
	if (number <= 100) return dogs[2];
	if (number === 101) return dogs[3];
};

// Simple tests:
console.log(howManyDalmatians(26) === "More than a handful!");
console.log(howManyDalmatians(8) === "Hardly any");
console.log(howManyDalmatians(14) === "More than a handful!");
console.log(howManyDalmatians(80) === "Woah that's a lot of dogs!");
console.log(howManyDalmatians(100) === "Woah that's a lot of dogs!");
console.log(howManyDalmatians(101) === "101 DALMATIANS!!!");