/* Task:

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

const even_or_odd = num => num % 2 ? "Odd" : "Even";

// Simple tests:
console.log(even_or_odd(2) === "Even");
console.log(even_or_odd(7) === "Odd");
console.log(even_or_odd(-42) === "Even");
console.log(even_or_odd(-7) === "Odd");
console.log(even_or_odd(0) === "Even");