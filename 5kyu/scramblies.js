/* Task:

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

*/

const scramble = ([...str1], [...str2]) => {
  const obj1 = {};
  const obj2 = {};
  let coincidences = 0;

  str1.forEach((char) => {
    if (!obj1[char]) {
      obj1[char] = 1;
    } else {
      obj1[char]++;
    };
  });

  str2.forEach((char) => {
    if (!obj2[char]) {
      obj2[char] = 1;
    } else {
      obj2[char]++;
    };
  });

  for (const key in obj1) {
    if (obj1[key] >= obj2[key]) {
      coincidences += obj2[key];
		};
	};

  return coincidences === str2.length;
};
		
// Simple tests:
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjavx', 'javascript') === false);
console.log(scramble('scriptingjava', 'javascript') === true);
console.log(scramble('scriptsjava', 'javascripts') === true);
console.log(scramble('javscripts', 'javascript') === false);
console.log(scramble('jscripts', 'javascript') === false);
console.log(scramble('aabbcamaomsccdd', 'commas') === true);
console.log(scramble('commas', 'commas') === true);
console.log(scramble('sammoc', 'commas') === true);