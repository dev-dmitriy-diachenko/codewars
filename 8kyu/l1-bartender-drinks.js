/* Task:

Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	-> "Patron Tequila"
"School Counselor" ->	"Anything with Alcohol"
"Programmer" ->	"Hipster Craft Beer"
"Bike Gang Member"	-> "Moonshine"
"Politician"	-> "Your tax dollars"
"Rapper" ->	"Cristal"
anything else ->	"Beer"

*/

const map = {
	"jabroni":	"Patron Tequila",
	"school counselor":	"Anything with Alcohol",
	"programmer":	"Hipster Craft Beer",
	"bike gang member":	"Moonshine",
	"politician":	"Your tax dollars",
	"rapper":	"Cristal",
}

const getDrinkByProfession = (param) => map[param.toLowerCase()] ? map[param.toLowerCase()] : "Beer";
	
// Simple tests:
console.log(getDrinkByProfession("jabrOni") === "Patron Tequila");
console.log(getDrinkByProfession("scHOOl counselor") === "Anything with Alcohol");
console.log(getDrinkByProfession("prOgramMer") === "Hipster Craft Beer");
console.log(getDrinkByProfession("bike ganG member") === "Moonshine");
console.log(getDrinkByProfession("poLiTiCian") === "Your tax dollars");
console.log(getDrinkByProfession("rapper") === "Cristal");
console.log(getDrinkByProfession("pundit") === "Beer");
console.log(getDrinkByProfession("Pug") === "Beer");