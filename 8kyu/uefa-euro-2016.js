/* Task:

Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

*/

const uefaEuro2016 = (teams, scores) => {
	if (scores[0] > scores[1]) return `At match ${teams.join(' - ')}, ${teams[0]} won!`;
	if (scores[0] < scores[1]) return `At match ${teams.join(' - ')}, ${teams[1]} won!`;

	return `At match ${teams.join(' - ')}, teams played draw.`;
};
	
// Simple tests:
console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]) === "At match Germany - Ukraine, Germany won!");
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2]) === "At match Belgium - Italy, Italy won!");
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]) === "At match Portugal - Iceland, teams played draw.");