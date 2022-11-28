// Working with strings
/*Strings can be created in different ways:
- 'As literal strings'- preferred
- As object returned from the constructor
- JavaScript performs type coercion under the hood when calling methods on primitives
*/


let testRing = 'This is a test ring';
console.log(testRing.length);

let ringArr = testRing.split(' ');
console.log(ringArr);
console.log(testRing.indexOf('is'));
console.log(testRing.lastIndexOf('is'));
console.log(testRing.toUpperCase());
console.log(testRing.substring(8, 9));
console.log(testRing.slice(-2))
console.log('  test   '.trim());

/* Summary Strings:
- Use length property to get length of string
- Use split to turn into an array
- Use indexOf or lastIndexOf to find position od characters in a string
- Use toUpperCase or to LowerCase methods for all caps/no caps
- Use subStr or slice to select parts of a string
- Use trim to remove white-space characters
*/
