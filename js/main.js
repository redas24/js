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
const number = [2,6,3,7,8,4,0,9];
number.sort();
console.log(number);
const array1 = [1, 2, 3];
console.log(array1.includes(2));


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result);


const array2 = [5, 12, 8, 130, 44];
const found = array2.find(element => element > 10);
console.log(found);

// Working with strings part2
console.log('------test------'.trimStart());
console.log('------test------'.trimEnd());
console.log('test'.padStart(7));
console.log('test'.padStart(7, '$'));


