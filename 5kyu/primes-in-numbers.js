/* Task:

Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

"(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/

const primeFactors = (n) => {
  const arr = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i) && n % i === 0) {
      let reps = 0;

      while (n % i === 0) {
        reps++;
        n /= i;
      };

      arr.push([i, reps]);
    };
  };

	const result = arr
		.map(el => el[1] === 1 ? `(${el[0]})` : `(${el[0]}**${el[1]})`)
		.join('');

  return result;
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
			return false;
		};
  };

  return num > 1
};
		
// Simple tests:
console.log(primeFactors(7775460) === "(2**2)(3**3)(5)(7)(11**2)(17)");