/* Task:

You have to write a function that describe Leo:

function leo(oscar) {

}
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"

*/

const leo = (oscar) => {
  if (oscar > 88) return "Leo got one already!";
  
	switch (oscar) {
		case 88:
			return "Leo finally won the oscar! Leo is happy";
		case 86:
			return "Not even for Wolf of wallstreet?!";
	};
	
  return "When will you give Leo an Oscar?";
};

// Simple tests:
console.log(leo(89) === "Leo got one already!")
console.log(leo(88) === "Leo finally won the oscar! Leo is happy");
console.log(leo(87) === "When will you give Leo an Oscar?")
console.log(leo(86) === "Not even for Wolf of wallstreet?!")