/* Task:

Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

*/

const greet = (name) => {
  return function() {
    return `Hello, ${name}!`;
  };
};

const greet_abe = greet('Abe');
const greet_ben = greet('Ben');

// Simple tests:
console.log(greet_abe() === 'Hello, Abe!');
console.log(greet_ben() === 'Hello, Ben!');