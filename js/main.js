// Working with strings
/*Strings can be created in different ways:
- 'As literal strings'- preferred
- As object returned from the constructor
- JavaScript performs type coercion under the hood when calling methods on primitives
*/

let testRing = "This is a test ring";
console.log(testRing.length);

let ringArr = testRing.split(" ");
console.log(ringArr);
console.log(testRing.indexOf("is"));
console.log(testRing.lastIndexOf("is"));
console.log(testRing.toUpperCase());
console.log(testRing.substring(8, 9));
console.log(testRing.slice(-2));
console.log("  test   ".trim());

/* Summary Strings:
- Use length property to get length of string
- Use split to turn into an array
- Use indexOf or lastIndexOf to find position od characters in a string
- Use toUpperCase or to LowerCase methods for all caps/no caps
- Use subStr or slice to select parts of a string
- Use trim to remove white-space characters
*/
const number = [2, 6, 3, 7, 8, 4, 0, 9];
number.sort();
console.log(number);
const array1 = [1, 2, 3];
console.log(array1.includes(2));

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);
console.log(result);

const array2 = [5, 12, 8, 130, 44];
const found = array2.find((element) => element > 10);
console.log(found);

// Working with strings part2
console.log("------test------".trimStart());
console.log("------test------".trimEnd());
console.log("test".padStart(7));
console.log("test".padStart(7, "$"));
// Template Literals
let template = "this is template literal";
let a = "5",
  b = "something";
console.log("a is ${a} while b is ${b} else");

function reverse(string) {
  return string.split("").reverse().join("");
}

function buildStr(strings, ...value) {
  return (
    strings[3] +
    value[2] +
    strings[2] +
    value[1] +
    strings[1] +
    value[0] +
    strings[0]
  );
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
console.log(Number.isNaN(5 + "oops"));
let floatString = "1.5";
let intString = "3";
console.log(typeof Number.parseFloat(floatString));
console.log(typeof Number.parseInt(intString));
let num = 4.6789432;
console.log(num.toFixed(2));
console.log(num.toExponential(2));
console.log(num.toLocaleString(2));
console.log(num.toPrecision(2));
console.log(num.toString(2));
// Working with BIGInt
// JAvaScript has a maximum safe value for integers 2*53-1

Number.MAX_SAFE_INTEGER + 1 === Number.MIN_SAFE_INTEGER + 2;

// Working with Arrays

let arr = ["one", "two", "three"];
arr.length;
console.log(arr.slice());
arr.push("four");
console.log(arr);

arr.unshift("zero");
console.log(arr);
arr.pop();
arr.shift();
arr.splice(0, 1);
console.log(arr);
arr.reverse("a", "b", "c");
arr.sort();
console.log(arr);
console.log(
  ["a", "b", "C"].sort(function (a, b) {
    let caselessA = a.toLowerCase(),
      caselessB = b.toLowerCase();
    if (caselessA < caselessB) {
      return -1;
    } else if (caselessA === caselessB) {
      return 0;
    } else {
      return 1;
    }
  })
);
console.log(
  [3, 10000, 20].sort(function (a, b) {
    return a - b;
  })
);

arr.join("x");
console.log(arr);
arr.indexOf("b");
arr.lastIndexOf("a");
arr.slice(1);
arr.slice("-2");
// Summary
/*Arrays
- length shows how many elements in the array
- Remove from end or start of array with pop, shift
- Add to end or start of array with push, unshift
- Use splice to add and remove from inside array
- Reverse or sort with reverse, sort
- join converts array to a string
- Use indexOf or lastIndexOf to find an item`s index
- Use slice to get subset of an array  */

// Working with arrays part 2
// Arrays contain numerous methods to iterate their elements in different ways.
let array = ["x", "y", "z"];
array.forEach(function (currentItem) {
  console.log(currentItem);
});
array.some(function (currentItem) {
  console.log("Iterating...");
  return currentItem === "y";
});
array.every(function (currentItem) {
  console.log("Also Iterating...");
  return currentItem !== "x";
});
let arr1 = [1, 2, 3, 4, 5];
let sum = arr1.reduce(function (previous, current) {
  return previous + current;
}, 0);
console.log(sum);
let refs = {
  a: "alpha",
  b: "beta",
  g: "gamma",
};
let arr2 = ["a", "b", "g"];
let result2 = arr2.map(function (currentItem) {
  return refs[currentItem];
});
console.log(result2);
// Summary
/*
Iterating arrays
- forEach -visit each array item
- some - iterate until callback returns true
- every - iterate until callback returns false
- reduce - reduce array to a single value
- map - map an array into another array
 */
// Working with arrays part 3
// includes() - does the array contain the value?
const fruits = ["Apples", "Oranges", "Bananas"];
console.log(fruits.includes("Apples"));
console.log(fruits.includes("Apples", 1));
// flat() -flatten a multidimensional array to a single dimension

const multiArray = ["Apples", "Oranges", ["Raspberries", "Blueberries"]];
console.log(multiArray.flat());
multiArray.concat(multiArray.join("bananas"));
console.log(multiArray);

const multiArray2 = ["Apples", "Oranges", ["Lemons", "Limes"]];
console.log(multiArray2.flat(2));
// Summary
/*includes - does the array include the specified value
flat - unwrap multidimensional arrays on n depth
 */

// Working with object type
// The prototype property
// All objects are descendants of Object
// Other objects inherit properties from Object via the prototype
// The prototype is a "live" object - changes to it are seen everywhere

//let newObj = {};
//Object.prototype.mySpecialProperty = "special!";
//console.log(newObj.mySpecialProperty);

//let myArr = ["first", "second", "third"];
//if (!Array.prototype.head) {
//  Array.prototype.head = function () {
//    return this[0];
//  };
//  console.log(myArr.head());
//}

let newObj = {
  prop1: "prop1",
};
Object.keys(newObj).forEach(function (item) {
  console.log(newObj[item]);
});
