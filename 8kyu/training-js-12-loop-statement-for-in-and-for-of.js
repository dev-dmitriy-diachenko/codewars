/* Task:

Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

Return the five after works finished.

You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)

*/

const giveMeFive = (obj) => {
	const result = [];

	for (const key in obj) {
		if (key.length === 5) result.push(key);
		if (obj[key].length === 5) result.push(obj[key]);
	};

	return result;
};
	
// Simple tests:
console.log(giveMeFive({ Our: "earth", is: "a", beautiful: "world"}), ' => ["earth", "world"]');
console.log(giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model"}), ' => ["Ihave", "money", "model"]');
console.log(giveMeFive({ Pears: "than", apple: "sweet" }), ' => ["Pears", "apple", "sweet"]');