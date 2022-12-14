/* Task:

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

*/

const getSize = (length, width, height) => [
	2 * length * width + 2 * length * height + 2 * width * height,
	length * width * height
];

// Simple tests:   
console.log(getSize(4, 2, 6), " => [88, 48]");
console.log(getSize(10, 10, 10), " => [600, 1000]");
console.log(getSize(4, 2, 6)[0] === 88);
console.log(getSize(4, 2, 6)[1] === 48);