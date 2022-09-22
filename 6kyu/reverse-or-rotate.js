/* Task:

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

*/

const revrot = (str, sz) => {
	if (sz <= 0) return '';

  const chunks = [];
	
	const shouldReverse = (chunk) =>
		[...chunk].reduce((acc, c) => acc + c ** 3, 0) % 2
			? chunk.slice(1) + chunk[0]
			: chunk.split('').reverse().join('');
	
  for (let i = 0; i < str.length; i += sz) {
    const chunk = str.slice(i, i + sz);

    if (chunk.length < sz) {
			break;
    };

		chunks.push(shouldReverse(chunk));
	};

	return chunks.join('');
};

// Simple tests:
console.log(revrot("123456987654", 6) === "234561876549");
console.log(revrot("123456987653", 6) === "234561356789");
console.log(revrot("66443875", 4) === "44668753");
console.log(revrot("66443875", 8) === "64438756");
console.log(revrot("664438769", 8) === "67834466");
console.log(revrot("123456779", 8) === "23456771");
console.log(revrot("", 8) === "");
console.log(revrot("123456779", 0) === "" );
console.log(revrot("563000655734469485", 4) === "0365065073456944");