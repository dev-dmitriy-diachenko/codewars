/* Task:

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

*/

let v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250;

const equal1 = (a = v1, b = v1) => a + b;
const equal2 = (a = v3, b = v1) => a - b;
const equal3 = (a = v1, b = v5) => a * b;
const equal4 = (a = v4, b = v5) => a / b;
const equal5 = (a = v6, b = v3) => a % b;

// Simple tests:
console.log(equal1() === 100);
console.log(equal2() === 100);
console.log(equal3() === 100);
console.log(equal4() === 100);
console.log(equal5() === 100);