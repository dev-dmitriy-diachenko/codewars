/* Task:

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

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