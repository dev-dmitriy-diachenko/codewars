/* Task:

Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

*/

class Animal {
	constructor(name) {
		this.name = name;
	};
};

class Cat extends Animal {
  speak () {
    return `${this.name} meows.`;
  };
};

// Simple tests:
const cat1 = new Cat('Mr Whiskers');
console.log(cat1.speak() === 'Mr Whiskers meows.');

const cat2 = new Cat('Lamp');
console.log(cat2.speak() === 'Lamp meows.');

const cat3 = new Cat('$$Money Bags$$');
console.log(cat3.speak() === '$$Money Bags$$ meows.');