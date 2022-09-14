/* Task:

Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

*/

const lowercaseCount = (str) =>
	/[a-z]/g.test(str) ? str.match(/[a-z]/g).length : 0;
	
// Simple tests:
console.log(lowercaseCount("abc") === 3);
console.log(lowercaseCount("abcABC123") === 3);
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~") === 3);
console.log(lowercaseCount("") === 0)
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~") === 0)
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz") === 26);