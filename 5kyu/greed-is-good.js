/* Task:

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

*/

const score = (dice) => {
  let result = 0;

  const counter = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  const threes = { 1: 1000, 2: 200, 3: 300, 4: 400, 5: 500, 6: 600 };
  const ones = { 1: 100, 2: 0, 3: 0, 4: 0, 5: 50, 6: 0 }

	dice.forEach(die => counter[die]++);

  for (let prop in counter) {
    if (counter[prop] >= 3) {
      result += threes[prop];
      counter[prop] = counter[prop] % 3;
      if (counter[prop] > 0) {
				result += counter[prop] * ones[prop];
			};
    } else {
			result += counter[prop] * ones[prop];
		};
  };

	return result;
};
		
// Simple tests:
console.log(score([2, 3, 4, 6, 2]) === 0);
console.log(score([4, 4, 4, 3, 3]) === 400);
console.log(score([2, 4, 4, 5, 4]) === 450);