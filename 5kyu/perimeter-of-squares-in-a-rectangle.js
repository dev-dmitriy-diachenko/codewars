/* Task:

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

*/

const perimeter = (num) => {
	const fibonachiArray = [];
	let sideLength = 0;

	for (let i = 0; i <= num; i++) {
		const current = (fibonachiArray[i - 1] + fibonachiArray[i - 2]) || 1;
		fibonachiArray.push(current);
		sideLength += current;
	};

	return 4 * sideLength;
};
		
// Simple tests:
console.log(perimeter(0) === 4);
console.log(perimeter(5) === 80);
console.log(perimeter(7) === 216);
console.log(perimeter(20) === 114624);
console.log(perimeter(30) === 14098308);