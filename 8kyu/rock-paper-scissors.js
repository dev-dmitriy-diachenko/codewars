/* Task:

Let's play! You have to return which player won! In case of a draw return Draw!.

*/

const rps = (p1, p2) => {
	if (p1 === p2) return 'Draw!';
  if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
  if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
	if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
	
  return 'Player 2 won!'
};

// Simple tests:
console.log(rps('rock', 'scissors') === 'Player 1 won!');
console.log(rps('scissors', 'paper') === 'Player 1 won!');
console.log(rps('paper', 'rock') === 'Player 1 won!');
console.log(rps('scissors', 'rock') === 'Player 2 won!');
console.log(rps('paper', 'scissors') === 'Player 2 won!');
console.log(rps('rock', 'paper') === 'Player 2 won!');
console.log(rps('rock', 'rock') === 'Draw!');
console.log(rps('scissors', 'scissors') === 'Draw!');
console.log(rps('paper', 'paper') === 'Draw!');