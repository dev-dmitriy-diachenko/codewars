/* Task:

Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

*/

const add = (a, b) => a + b;

const divide = (a, b) => a / b;

const multiply = (a, b) => a* b;

const mod = (a, b) => a % b; 

const exponent = (a, b) => a ** b;	

const subt = (a, b) => a - b;


// Simple tests:   
console.log(add(1, 2) === 3);
console.log(multiply(1, 2) === 2);
console.log(divide(2, 1) === 2);
console.log(mod(1, 2) === 1);
console.log(exponent(1, 2) === 1);
console.log(subt(1, 2) === -1);