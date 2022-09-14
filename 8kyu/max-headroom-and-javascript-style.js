/* Task:

Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

*/

const getMax1 = () => {
	return { name: 'Max Headroom' };
};

const getMax2 = () => {
	return { name: 'Max Headroom' };
};

// Simple tests:
console.log(JSON.stringify(getMax2()) === JSON.stringify(getMax1()));