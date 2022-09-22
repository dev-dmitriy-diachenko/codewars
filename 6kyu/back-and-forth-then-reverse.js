/* Task:

A list S will be given. You need to generate a list T from it by following the given process:

1. Remove the first and last element from the list S and add them to the list T.
2. Reverse the list S
3. Repeat the process until list S gets emptied.

The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

Example
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T

Note
- Size of S goes up to 10^6
- Keep the efficiency of your code in mind.
- Do not mutate the Input.

*/

const arrange = (s) => {
  const t = [];

  for (
    let i = 0, j = s.length - 1;
    t.length <= s.length;
    i++, j--
  ) {
    if (i % 2) {
      t.push(s[j]);
      t.push(s[i]);
    } else {
      t.push(s[i]);
      t.push(s[j]);
		};
	};

	t.length = s.length;

  return t;
};

// Simple tests:
console.log(arrange([1, 2]), " => [1, 2]");
console.log(arrange([4, 3, 2]), " => [4, 2, 3]");
console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]), " => [9, 1, 5, 7, -2, 6, -3, 8, 5]");
console.log(arrange([1]), " => [1]");
console.log(arrange([]), " => []");
console.log(arrange([2, 4, 3, 4]), " => [2, 4, 3, 4]");