/* Task:

Complete the solution so that it reverses all of the words within the string passed in.

*/

const reverseWords = (string) => string.split(' ').reverse().join(' ');

// Simple tests:
console.log(reverseWords("hello world!") === "world! hello");
console.log(reverseWords("yoda doesn't speak like this" ) === "this like speak doesn't yoda");
console.log(reverseWords("foobar"                       ) === "foobar");
console.log(reverseWords("kata editor"                  ) === "editor kata");
console.log(reverseWords("row row row your boat"        ) === "boat your row row row");