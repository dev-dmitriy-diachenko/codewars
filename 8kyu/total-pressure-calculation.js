/* Task:

Given the molecular mass of two molecules. Task is to calculate total pressure.

*/

const solution = (M1, M2, m1, m2, v, t) => {
	const CELSIUS_TO_KELVIN = t + 273.15;
	const GAS_CONSTANT = 0.082;

	return (m1 / M1 + m2 / M2) * GAS_CONSTANT * CELSIUS_TO_KELVIN / v;
};
	
// Simple tests:
console.log(solution(44, 30, 3, 2, 5, 50), ' => 0.7146511212121212');
console.log(solution(60, 20, 10, 30, 10, 100), ' => 5.099716666666667');