/* Task:

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

Go challenge Build Tower Advanced once you have finished this :)

*/

const towerBuilder = (nFloors) => {
  const tower = [];
  let spaces = 0;

  while (nFloors) {
    tower[nFloors - 1] = ' '.repeat(spaces) + '*'.repeat(nFloors * 2 - 1) + ' '.repeat(spaces);
    nFloors--;
		spaces++;
	};

  return tower;
};

// Simple tests:
console.log(towerBuilder(1), ' => ["*"]');
console.log(towerBuilder(2), ' => [" * ","***"]');
console.log(towerBuilder(3), ' => ["  *  "," *** ","*****"]');