/* Task:

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017

Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

some tests will include very large numbers.

test data only employs positive integers.

The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

*/

const nextSmaller = (n) => {
  const min = getMinSameDigits(n);

  for (let i = n - 1; i >= min; i--) {
    if (getMinSameDigits(i) === min) {
      return i;
		};
	};

  return -1;
};

const getMinSameDigits = (num) => num
  .toString()
  .split('')
  .sort()
  .join('')
  .replace(/^(0+)([1-9])/, '$2$1');

// Simple tests:
console.log(nextSmaller(21) === 12);
console.log(nextSmaller(907) === 790);
console.log(nextSmaller(531) === 513);
console.log(nextSmaller(135) === -1);
console.log(nextSmaller(2071) === 2017);
console.log(nextSmaller(1027) === -1);
console.log(nextSmaller(414) === 144);
console.log(nextSmaller(123456798) === 123456789);
console.log(nextSmaller(123456789) === -1);
console.log(nextSmaller(1234567908) === 1234567890);