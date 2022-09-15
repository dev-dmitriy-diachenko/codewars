/* Task:

Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

*/

const setAlarm = (employed, vacation) =>
	!employed ? false : !(employed && vacation);

// Simple tests:
console.log(setAlarm(true, true) === false);
console.log(setAlarm(false,true) === false);
console.log(setAlarm(true, false) === true);