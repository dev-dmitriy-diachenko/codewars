/* Task:

Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

*/

const converter = (mpg) => {
	const LITER_PER_GALLON = 4.54609188;
	const KILOMETRS_PRE_MILE = 1.609344;

	return +(mpg * KILOMETRS_PRE_MILE / LITER_PER_GALLON).toFixed(2);
};
	
// Simple tests:
console.log(converter(10) === 3.54);
console.log(converter(20) === 7.08);
console.log(converter(30) === 10.62);