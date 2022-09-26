/* Task:

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

*/

const toHex = (d) => {
	if (d < 0) {
		return "00";
	} else if (d > 255) {
		return "FF";
	} else {
		return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase();
	};
};

const rgb = (r, g, b) => `${toHex(r)}${toHex(g)}${toHex(b)}`;

// Simple tests:
console.log(rgb(0, 0, 0) === '000000');
console.log(rgb(0, 0, -20) === '000000');
console.log(rgb(300, 255, 255) === 'FFFFFF');
console.log(rgb(173, 255, 47) === 'ADFF2F');