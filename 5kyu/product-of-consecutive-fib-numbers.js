/* Task:

The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:

(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 

Note:

You can see examples for your language in "Sample Tests".

*/

const fibonachiArr = [
  1, 1, 2, 3,
  5, 8, 13, 21,
  34, 55, 89, 144,
  233, 377, 610, 987,
  1597, 2584, 4181, 6765,
  10946, 17711, 28657, 46368,
  75025, 121393, 196418, 317811,
  514229, 832040, 1346269, 2178309,
  3524578, 5702887, 9227465, 14930352,
  24157817, 39088169, 63245986, 102334155
]

const productFib = (prod) => {
	for (let i = 0; i < fibonachiArr.length - 1; i++) {
		if (fibonachiArr[i] * fibonachiArr[i + 1] > prod) {
			return [fibonachiArr[i], fibonachiArr[i + 1], false];
		};

		if (fibonachiArr[i] * fibonachiArr[i + 1] === prod) {
			return [fibonachiArr[i], fibonachiArr[i + 1], true];
		};
	};
};
		
// Simple tests:
console.log(productFib(4895), " => [55, 89, true]");
console.log(productFib(5895), " => [89, 144, false]");
console.log(productFib(74049690), " => [6765, 10946, true]");
console.log(productFib(84049690), " => [10946, 17711, false]");
console.log(productFib(193864606), " => [10946, 17711, true]");
console.log(productFib(447577), " => [610, 987, false]");
console.log(productFib(602070), " => [610, 987, true]");