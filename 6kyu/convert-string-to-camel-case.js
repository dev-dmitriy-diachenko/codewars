/* Task:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

const toCamelCase = (str) => {
  const arr = str.match(/-/g) ? str.split('-') : str.split('_');
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

	return arr.map((word, i) => i === 0 ? word : capitalize(word)).join('');
};

// Simple tests:
console.log(toCamelCase('') === '');
console.log(toCamelCase("the_stealth_warrior") === "theStealthWarrior");
console.log(toCamelCase("The-Stealth-Warrior") === "TheStealthWarrior");
console.log(toCamelCase("A-B-C") === "ABC");