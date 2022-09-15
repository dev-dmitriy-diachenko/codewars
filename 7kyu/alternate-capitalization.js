/* Task:

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

*/

const capitalize = (str) => {
  let lowercased = '';
  let uppercased = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      lowercased += str[i].toLowerCase();
      uppercased += str[i].toUpperCase();
    } else {
      lowercased += str[i].toUpperCase();
      uppercased += str[i].toLowerCase();
		};
	};

  return [uppercased, lowercased];
};

// Simple tests:
console.log(capitalize("abcdef"), " => ['AbCdEf', 'aBcDeF']");
console.log(capitalize("codewars"), " => ['CoDeWaRs', 'cOdEwArS']");
console.log(capitalize("abracadabra"), " => ['AbRaCaDaBrA', 'aBrAcAdAbRa']");
console.log(capitalize("codewarriors"), " => ['CoDeWaRrIoRs', 'cOdEwArRiOrS']");