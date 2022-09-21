/* Task:

In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
Y
our method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}

You can expect valid input. You won't see input like:

// This will NOT happen

foo=1&foo.bar=2

All properties and values will be strings — and the values should be left as strings to pass the tests.

Make sure you decode the URI components correctly

*/

const convertQueryToMap = (string) => {
	if (!string) return {};
  
  const resultObject = {};
  const queryParams = string.split('&')
    .map(param => param.split('='))
    .map(param => [param[0].split('.'), param[1]]);

	queryParams.forEach((query, i) => {
		let currentObject = resultObject;
		const [keys, value] = query;

		keys.forEach((key, j) => {
			if (j === keys.length - 1) {
				currentObject[key] = decodeURIComponent(value)
			};

			if (currentObject[key]) {
				currentObject = currentObject[key];
			} else {
				currentObject[key] = {};
				currentObject = currentObject[key];
			};
		});
	});

	return resultObject;
};

// Simple tests: