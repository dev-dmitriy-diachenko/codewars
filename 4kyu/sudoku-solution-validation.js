/* Task:

Sudoku Background

Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

*/

const validSolution = (board) => {
  const rows = [...board];
  const columns = [...board].map((row, i) => row.map((_, j) => board[j][i]));
  const cells = [];
  const digitsValidation = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const k = Math.floor(i / 3) + Math.floor(j / 3) * 3;

      cells[k] = cells[k] || [];
      cells[k].push(board[i][j]);
		};
  };

	const isValid = (digit, row, column, cell) => {
		const repsInRow = row.filter(el => el === digit).length;
		const repsInColumn = column.filter(el => el === digit).length;
		const repsInCell = cell.filter(el => el === digit).length;

		return repsInRow === 1 && repsInColumn === 1 && repsInCell === 1;
	};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const k = Math.floor(i / 3) + Math.floor(j / 3) * 3;

      const digit = board[i][j];
      const currentRow = rows[i];
      const currentColumn = columns[j];
      const currentCell = cells[k];

      digitsValidation.push(isValid(digit, currentRow, currentColumn, currentCell))
		};
  };

	const isSolved = digitsValidation.reduce((prev, next) => prev && next);

  return isSolved;
};

// Simple tests:
console.log(validSolution(
	[
		[5, 3, 4, 6, 7, 8, 9, 1, 2],
		[6, 7, 2, 1, 9, 5, 3, 4, 8],
		[1, 9, 8, 3, 4, 2, 5, 6, 7],
		[8, 5, 9, 7, 6, 1, 4, 2, 3],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[9, 6, 1, 5, 3, 7, 2, 8, 4],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 4, 5, 2, 8, 6, 1, 7, 9]
	]
) === true);

console.log(validSolution(
	[
		[5, 3, 4, 6, 7, 8, 9, 1, 2], 
		[6, 7, 2, 1, 9, 0, 3, 4, 8],
		[1, 0, 0, 3, 4, 2, 5, 6, 0],
		[8, 5, 9, 7, 6, 1, 0, 2, 0],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[9, 0, 1, 5, 3, 7, 2, 1, 4],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 0, 0, 4, 8, 1, 1, 7, 9]
	]
) === false);