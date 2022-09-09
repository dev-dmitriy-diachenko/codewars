/* Task:

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/

const replace = {
	'ą': 'a',
	'ć': 'c',
	'ę': 'e',
	'ł': 'l',
	'ń': 'n',
	'ó': 'o',
	'ś': 's',
	'ź': 'z',
	'ż': 'z',
};

const correctPolishLetters = (string) => [...string].map(el => replace[el] || el).join('');
	
// Simple tests:
console.log(correctPolishLetters("Jędrzej Błądziński") ==="Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa") ==="Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie") ==="Maria Sklodowska-Curie");