/* Task:

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

*/

const solution = (str) => {
  const result = [];

  if (str.length % 2) {
    str += '_';
  };

  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2))
  }

  return result;
};

// Simple tests:
console.log(solution("abcdef"), ' => ["ab", "cd", "ef"]');
console.log(solution("abcdefg"), ' => ["ab", "cd", "ef", "g_"]');
console.log(solution(""), ' => []');