/* Task:

Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age

You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

##Examples:

age = 27   =>   20-40
age = 5    =>   4-5
age = 17   =>   15-20

*/

const datingRange = (age) => {
	const min = (age) => Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
	const max = (age) => Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
  
	return `${min(age)}-${max(age)}`;
};

// Simple tests:
console.log(datingRange(17) === "15-20");
console.log(datingRange(40) === "27-66");
console.log(datingRange(15) === "14-16");
console.log(datingRange(35) === "24-56");
console.log(datingRange(10) === "9-11");