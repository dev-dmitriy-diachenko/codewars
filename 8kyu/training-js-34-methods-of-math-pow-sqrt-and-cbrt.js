/* Task:

Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube. If we cut the cube into n block. please determine whether the length of the cube is an integer. return true or false.

*/

const cutCube = (volume, n) =>
	!(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);

// Simple tests:
console.log(cutCube(27,27) === true);
console.log(cutCube(512,8) === true);
console.log(cutCube(512,64) === true);
console.log(cutCube(50000,50) === false);
console.log(cutCube(432,16) === false);
console.log(cutCube(256,8) === false);
console.log(cutCube(27,3) === false);
console.log(cutCube(123,456) === false);
console.log(cutCube(27,8) === false);