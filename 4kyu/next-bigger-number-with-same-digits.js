/* Task:

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071

nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1

nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil

*/

const nextBigger = (n) => {
  const digits = [...n.toString()];
  let pivot = -1;

  // find the pivot, the point (from right) where current > previous
  for (let i = digits.length - 1; i > 0; i--) {
    const curr = +digits[i];
    const prev = +digits[i - 1];

    if (curr > prev) {
      pivot = i - 1;
      break;
    };
  };

  // if we are unable to find the pivot, it means that there isn't nextBigger number with same digits
  if (pivot == -1) return pivot;

  // cut off piece of digits starting from the pivot
  const right = digits.splice(pivot);

  // extract pivot
  const pv = right.splice(0, 1)[0];

  // find the lowest number > pivot
  let lowestThenPivot = null;
  let lowestThenPivotIdx = null;

	right.forEach((digit, i) => {
		if (digit > pv && (!lowestThenPivot || digit < lowestThenPivot)) {
			lowestThenPivot = digit;
			lowestThenPivotIdx = i;
		};
	});

  // swap pivot and lowestThenPivot 
  right.splice(lowestThenPivotIdx, 1);
  right.push(pv);
  right.sort();

  // concat the arrays and turn to number
  const ret = +[...digits, ...lowestThenPivot, ...right].join('');

	return ret;
};

// Simple tests:
console.log(nextBigger(12) === 21);
console.log(nextBigger(513) === 531);
console.log(nextBigger(2017) === 2071);
console.log(nextBigger(414) === 441);
console.log(nextBigger(144) === 414);