/* Task:

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

*/

const saleHotdogs = (n) => {
	if (n < 5) return n * 100;
	if (n < 10) return n * 95;

	return n * 90;
};

// Simple tests:
console.log(saleHotdogs(1) === 100);
console.log(saleHotdogs(4) === 400);
console.log(saleHotdogs(5) === 475);
console.log(saleHotdogs(9) === 855);
console.log(saleHotdogs(10) === 900);
console.log(saleHotdogs(100) === 9000);