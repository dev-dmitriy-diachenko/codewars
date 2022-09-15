/* Task:

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

*/

const fakeBin = (num) => [...num].map(n => n > 4 ? n = 1 : n = 0).join('');

// Simple tests:
console.log(fakeBin('45385593107843568') === '01011110001100111');
console.log(fakeBin('509321967506747') === '101000111101101'); 
console.log(fakeBin('366058562030849490134388085') === '011011110000101010000011011');