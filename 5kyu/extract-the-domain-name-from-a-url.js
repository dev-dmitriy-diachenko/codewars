/* Task:

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

*/

const domainName = (url) => {
  const matches = url.match(/^(?:https?:)?(?:\/\/)?(?:www.)?([^\/\?]+)/i);
  const domain = matches && matches[1];  // domain will be null if no match is found
  
	return domain.split('.')[0];
};
		
// Simple tests:
console.log(domainName("http://google.com") === "google");
console.log(domainName("http://google.co.jp") === "google");
console.log(domainName("www.xakep.ru") === "xakep");
console.log(domainName("https://youtube.com") === "youtube");