/* Task:

Hey Codewarrior!

You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

The constructor taking no arguments should assign 0 to Cube's Side property.

*/

class Cube {
  constructor(n = 0) {
		this.side = Math.abs(n);
	};
  
  getSide() {
    return this.side; 
  };
  
  setSide(n) {
    this.side = Math.abs(n);
  };
};

const cube1 = new Cube();
const cube2 = new Cube(12);
const cube3 = new Cube(-23);

// Simple tests:
console.log(cube1.getSide(), ' => 0');
console.log(cube2.getSide(), ' => 12');
console.log(cube3.getSide(), ' => 23');
