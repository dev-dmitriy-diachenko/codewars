/* Task:

Our counter prototype is broken. Can you spot, what's wrong here?

*/

class Counter{
	constructor(value) {
		this.value = 0;
	};

	increase() {
		this.value++;
	};

	getValue() {
		return this.value;
	};

	reset() {
		this.value = 0;
	};
};

// Simple tests:
const counter = new Counter();

console.log(counter.getValue() === 0);
counter.increase();
counter.increase();
console.log(counter.getValue() === 2);
counter.reset();
console.log(counter.getValue() === 0);