/* Task:

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

*/

const ipsBetween = (start, end) => {
  const convertIP = ((ipString) => ipString.split('.')
    .map((octet) => Number(octet).toString(2))
    .map((binary) => '0'.repeat(8 - binary.length) + binary).join(''));

  return parseInt(convertIP(end), 2) - parseInt(convertIP(start), 2)
}
		
// Simple tests:
console.log(ipsBetween("150.0.0.0", "150.0.0.1") === 1);
console.log(ipsBetween("10.0.0.0", "10.0.0.50") === 50);
console.log(ipsBetween("20.0.0.10", "20.0.1.0") === 246);
console.log(ipsBetween("10.11.12.13", "10.11.13.0") === 243);
console.log(ipsBetween("160.0.0.0", "160.0.1.0") === 256);
console.log(ipsBetween("170.0.0.0", "170.1.0.0") === 65536);
console.log(ipsBetween("50.0.0.0", "50.1.1.1") === 65793);
console.log(ipsBetween("180.0.0.0", "181.0.0.0") === 16777216);
console.log(ipsBetween("1.2.3.4", "5.6.7.8") === 67372036);
console.log(ipsBetween("0.0.0.0", "255.255.255.255") === 2 ** 32 - 1);