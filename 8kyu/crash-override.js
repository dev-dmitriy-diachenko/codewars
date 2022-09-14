/* Task:

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

*/

const firstNameFake = {
  'A': "Alpha",
  'B': "Beta",
  'C': "Cache",
  'D': "Data",
  'E': "Energy",
  'F': "Function",
  'G': "Glitch",
  'H': "Half-life",
  'I': "Ice",
  'J': "Java",
  'K': "Keystroke",
  'L': "Logic",
  'M': "Malware",
  'N': "Nagware",
  'O': "OS",
  'P': "Phishing",
  'Q': "Quantum",
  'R': "RAD",
  'S': "Strike",
  'T': "Trojan",
  'U': "Ultraviolet",
  'V': "Vanilla",
  'W': "WiFi",
  'X': "Xerox",
  'Y': "Y",
  'Z': "Zero"
};

const lastNameFake = {
  'A': "Analogue",
  'B': "Bomb",
  'C': "Catalyst",
  'D': "Discharge",
  'E': "Electron",
  'F': "Faraday",
  'G': "Gig",
  'H': "Hacker",
  'I': "IP",
  'J': "Jabber",
  'K': "Killer",
  'L': "Lazer",
  'M': "Mike",
  'N': "n00b",
  'O': "Overclock",
  'P': "Payload",
  'Q': "Quark",
  'R': "Roy",
  'S': "Spy",
  'T': "T-Rex",
  'U': "Unit",
  'V': "Virus",
  'W': "Worm",
  'X': "X",
  'Y': "Yob",
  'Z': "Zombie"
};

const aliasGen = (firstName, lastName) => {
	const firstNameFirstChar = firstName[0].toUpperCase();
	const lastNameFirstChar = lastName[0].toUpperCase();
	const isUpperCasedLetter = (char) => char.match(/[A-Z]/g);

	if (!isUpperCasedLetter(firstNameFirstChar) || !isUpperCasedLetter(lastNameFirstChar)) {
		return "Your name must start with a letter from A - Z."
	} else {
		return `${firstNameFake[firstNameFirstChar]} ${lastNameFake[lastNameFirstChar]}`
	};
};

// Simple tests:
console.log(aliasGen("Mike", "Millington") === "Malware Mike");
console.log(aliasGen("Fahima", "Tash") === "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic") === "Data Payload");
console.log(aliasGen("7393424", "Anumbha") === "Your name must start with a letter from A - Z.");
console.log(aliasGen("Anuddanumbha", "23200") === "Your name must start with a letter from A - Z.");