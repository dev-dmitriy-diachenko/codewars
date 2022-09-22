/* Task:

John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.

Notes

You can see another examples in the "Sample tests".

*/

const encode = (string) => 
	string.replace(/[aeiou]/g, (x) => '_aeiou'.indexOf(x));

const decode = (string) => 
	string.replace(/[1-5]/g, (x) => '_aeiou'.charAt(x));

// Simple tests:
console.log(encode('hello') === 'h2ll4');
console.log(encode('How are you today?') === 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.') === 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4') === 'hello');