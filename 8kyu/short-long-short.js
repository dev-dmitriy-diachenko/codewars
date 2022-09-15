/* Task:

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

*/

const solution = (a, b) => a.length < b.length 
  ? a + b + a
  : b + a + b;

// Simple tests:   
console.log(solution('45', '1') === '1451');
console.log(solution('13', '200') === '1320013');
console.log(solution('Soon', 'Me') === 'MeSoonMe');
console.log(solution('U', 'False') === 'UFalseU');