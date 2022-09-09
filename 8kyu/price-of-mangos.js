/* Task:

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

*/

const mango = (quantity, price) =>
	(quantity - Math.floor(quantity / 3)) * price;
	
// Simple tests:
console.log(mango(3, 3) === 6);
console.log(mango(9, 5) === 30);