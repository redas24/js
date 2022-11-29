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
// Template Literals
let template = 'this is template literal'
let a = '5' , b ='something';
console.log('a is ${a} while b is ${b} else');

function reverse(string) {
  return string.split('').reverse().join('');
}

function buildStr(strings, ...value) {
  return strings[3] + value[2] +strings[2] +value[1] + strings[1] + value[0] +strings[0];

}
console.log(buildStr);

/*Summary
Template Literals
- Use backticks to define
- Just like strings but with extra powers
- Multiline
- Token substitution
- Tag with a function fo full substitution control
*/
// Working with numbers
//  Numbers are primitives
/*Numbers have properties related to special values in JavaScript
- MAX_VALUE
- MIN_VALUE
- MAX_SAFE_INTEGER
- MIN_SAFE_INTEGER
 */
 console.log(Number.isNaN(5 +'oops'));
let floatString = '1.5';
let intString = '3';
console.log(typeof Number.parseFloat(floatString));
console.log(typeof Number.parseInt(intString));
let num = 4.6789432;
console.log(num.toFixed(2));
console.log(num.toExponential(2));
console.log(num.toLocaleString(2));
console.log(num.toPrecision(2));
console.log(num.toString(2))
// Working with BIGInt
// JAvaScript has a maximum safe value for integers 2*53-1



  Number.MAX_SAFE_INTEGER + 1 === Number.MIN_SAFE_INTEGER + 2

// BiGInt
const veryLargeNumber = BigInt(9007199254740992);
const veryLargeNumber2 = BigInt('9007199254740992');
const veryLargeNumber3 = 9007199254740992n;
// BigInt(Number.MAX_SAFE_INTEGER) + 1;





// Working with Arrays

let arr = ['one', 'two', 'three'];
arr.length;
console.log(arr.length);