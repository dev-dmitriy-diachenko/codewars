/* Task:

The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

hammingWeight(10) // 1010  => 2
hammingWeight(21) // 10101 => 3

The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)

*/

const hammingWeight = (num) => {
  const pow = Math.ceil(Math.log2(num));
	let result = 0;

  for (let i = pow; i >= 0; i--) {
    if (2 ** i <= num) {
      result++;
			num %= 2 ** i;
		};
  };

	return result;
};

// Simple tests:
console.log(hammingWeight(10) === 2);
console.log(hammingWeight(21) === 3);