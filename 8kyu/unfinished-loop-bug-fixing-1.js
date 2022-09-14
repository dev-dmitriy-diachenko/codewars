/* Task:

Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

Input/Output

[input] string lastPlayer/$last_player

"black" or "white" - whose move it was during the previous round.

[input] boolean win/$win

true if the player who made a move during the previous round won, false otherwise.

[output] a string

Return "white" if white is to move on the next round, and "black" otherwise.

Example

For lastPlayer = "black" and win = false, the output should be "white".

For lastPlayer = "white" and win = true, the output should be "white".

*/

const createArray = (num) => {
	const arr = [];
  
	for (let i = 1; i <= num; i++) {
		arr.push(i);
	};
  
	return arr;
};

// Simple tests:
console.log(createArray(1), " => [1]");
console.log(createArray(2), " => [1, 2]");
console.log(createArray(3), " => [1, 2, 3]");
console.log(createArray(4), " => [1, 2, 3, 4]");
console.log(createArray(5), " => [1, 2, 3, 4, 5]");