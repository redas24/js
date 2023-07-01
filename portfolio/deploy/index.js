console.log("Welcome to JS");
const myArray = [];

myArray[0] = "Lucas";
myArray[1] = 1001;
myArray[2] = false;

myArray.push("college");

const newLength = myArray.unshift(44);

myArray.splice(1, 1, 42);
myArray.pop = myArray;
console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);

// Slice method with arrays
const myArray1 = ["A", "B", "C", "D", "E", "F"];

const newString = myArray1.join();
myArray1.reverse();

const newArray2 = myArray1.slice(2);

console.log(newArray2);

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const newArrayA = myArrayA.concat(myArrayB);


console.log(newArray);
let mutt = newArray2;

const person = {
  name: ["Lucas", "Cheps"],
  age: 39,
  bio: function () {
    console.log("${this.name[0]} ${this.name[1]}");
  },
};

console.log(person);

document.getElementById("button").onclick = function () {
  document.getElementById("confirm").innerHTML =
    "Order placed. Check email for confirmation ";
  document.getElementById("button").style.display = "none";
};

let foo = 42; // can reassign can build block scope
foo = 78;
console.log(foo);

//let username = prompt();
//console.log(username);//

const baz = 42; // cant reassign

//Data types , boolean, numbers,integers,string, undefined,null,symbol

let string = "hey";

console.log(string);

let array = [5, "car", true];
let array2 = new Array();
array[0];
console.log(array);
array.push(array);
// maths = assignment operators

let postfix = 5;
let prefix = 5;
console.log(postfix);
console.log(++prefix);
console.log(prefix);
console.log(postfix++);
console.log(++postfix);
// Assignment operators

let additionAssignment = 1;
additionAssignment += 2;
console.log(additionAssignment);

let subtractionAssignment = 1;
subtractionAssignment -= 2;
// Arithmetic operators
// Assignment operators(= += -= *=/=)
// Comparison operators(== === < <= > => != !==)
// Be wary of type-coercion

// Advanced operators part2
// Unary operators - operators with only single operand
let test = {
  x: "x",
};

console.log(test.x);
console.log(true && true);
console.log(true || true);
let obj = { x: "x", y: "y", z: "z" };
console.log(obj);
// Exponentiation operator
// Logical assignment operators
(function () {
  const num = 2 ** 4;
})();
console.log();
//
let a = null;
let b = 1;
console.log((a ??= b));
// Operator Precedence
// Operator associativity(left-to-right, or right-to-left)
// parenthesis () -grouping operator have the presence in the other higher operators.
let precedence = 1 + 4 * 2;
let precedence2 = (1 + 4) * 2;
let precedence3 = console.log(precedence);
console.log(precedence2);
// Reserved words
/* An identifier - the name given to:
- a variable
- an object property
- a function
- a class
Identifier name rules:
- Must start with a letter, an underscore, or $
- Numbers can be used within the identifier name
*/
let myThing1; //good
//let 1Thing; //bad
let myVariable, myvariable;
myVariable != myvariable;

// Numeric Separators
/* Syntactic sugar for working with very large integers */
(function () {
  const largeNumber = 1000000000;
  const largeNumber2 = 1_000_000_000;
})();
/* Summary
    - Use separators to make large numbers more readable
    - Dont affect calculation/operations
    - Use them where they make sense for you
    - No consecutive separators
*/
// Nullish Coalescing & Optional Chaining
/* The nullish coalescing logical operators ?? */
/*(function1() {
    const x = null;
    const y = x || 10; // y =10
})();*/

/* ?. - The optional chaining operator is conceptually similar to the nullish coalescing operator */

let obj1;
obj.test; // type error
obj1?.test; //undefined
console.log(obj);
/* Function
  - A function is a named group of expressions
  - A function can be invoked at any time to execute the expressions it contains.
  */
(function () {
  "use strict";
  function function1(msg, msg2) {
    console.log(msg);
  }
  function1("new message!");
  function1("another message!");

  function logArgs() {
    console.log(arguments);

    return "some value";
  }
  logArgs("car", "boat", "arguments");

  let f = function f() {};
  f();

  function log() {
    console.log(test);
    var test = "test";
  }
  log();
})();

// Arrays
/* An array is single object which can contain multiple values
Arrays cn be created in multiple ways :
      -We can use the Array constructor
      -We can create array literals
*/

let myArray4 = new myArray4();
let myArray2 = ["a value", "a second value"];
console.log(myArray2);
console.log(myArray);

// Objects
(function () {
  let myObject = {
    car1: "sport",
    car2: false,
  };

  let obj = new Object();

  myObject.car2;
  myObject["car2"];

  myObject.car3 = true;
  myObject["car4"] = "engine";

  function getThingByColor(color) {
    let things = {
      red: "red things",
      green: "green things",
      yellow: "yellow things",
    };
    return things[color] || "Sorry no thing of that color exists!";
  }
  console.log(getThingByColor("yellow"));
  console.log(getThingByColor("purple"));

  console.log(obj);
})();

// Sets
/*Set:
  -Data structure to store unique values
  - Get number of items using size property
  - Use add to add new items
   - Use delete to remove items
   - Use has to see if set contains an item
    -Similar to arrays
    */
let mySet = new Set();
let anArray = [1, 1, 1, 2, 2, 3];
let mySet2 = new Set(anArray);
console.log(mySet2);
console.log(mySet2.size);
mySet2.add(5);
console.log(mySet2);
console.log(mySet2.has(2));

// Maps Objects
// maps similar to object
/* Map:
  - Similar API to Set
  - Store key-value pairs
  - Use set method to add new items
  - Use get method to retrieve items
*/
let myMap = new Map();
let myMap2 = new Map([
  ["a", "b"],
  [1, 2],
]);
myMap2.set("c", 3);
console.log(myMap2);

// WeakSet and WeakMap
/* Reference to objects are held weakly
The garbage collector will be able to dispose of them when no longer in use
 */

let myWeakSet = new WeakSet();
let someObj = {};
myWeakSet.add(someObj);
console.log(myWeakSet.has(someObj));

myWeakSet.delete(someObj);
console.log(myWeakSet.has(someObj));

//The key in WeakMap must be object

let myWeakMap = new WeakMap();
/* Summary
  WeakSet andWeakMap:
    - Similar to Set and Map
    - Except reference to values are held weakly - do not prevent garbage collector
    - Both have very small APIs
    - Cannot be iterated
  */

/*  Controlling program execution*/
// Conditionals statement
// An if statement can conditionally execute code based on the result of an expression

if (2 + 2 === 4) {
  console.log("conditions is true");
}

if (true === false) {
  console.log("this will be not logged");
} else {
  console.log("this will be logged");
}

let color = "red";
if (color === "blue") {
  console.log("blue");
} else if (color === "green") {
  console.log("green");
} else {
  console.log(color);
}

if (1) {
  console.log("truthy");
}

let arr = ["yes"];
if (arr.length) {
  console.log("array has length");
}

let newArray = ["car", "super-car", "limousine"];
console.log(newArray);

let newCar = {
  engine: "500horsepowers",
  doors: 5,
  wheels: 4,
  seatbelt: 5,
};
console.log(newCar);
// Ternary operator take 3 operands
true ? console.log("truthy") : console.log("falsy");

/* Try Catch
- Used to handle code that could potentially throw errors
- Not syntax errors or typos - operations that may genuinely fail
- Errors stop program execution
- Try catch may allow us to recover from the error
 */

try {
  // something that may result in an error
} catch (error) {
  console.log("an error occurred:", error);
}
// Switch statements
/* Switch:
- Can perform faster than an equivalent if statement
- Some find it more readable
- if is used with Boolean conditions
- Switch can be used with other types
  */

let switcher = "five";

switch (switcher) {
  case "one":
    console.log("the value was one");
    break;
  case "two":
    console.log("the value was two");
    break;
  case "three":
    console.log("the value was three");
    break;
  default:
    console.log("nothing else matched");
}
/* Summary Switch:
- Similar to if else
- Can switch on any value, not just Boolean */

// The for Loop
/* JavaScript has several loops:
- while / do while
- for / for in / for of
- loop constructor: for(expression1; expression2; expression3;) {}
- regular loop is used for iterate values in array.
*/

let anArray1 = ["one", "two", "three"];

for (const element of anArray1) {
  console.log(element);
}

/* For in loop
- Useful for iterating over the properties of an object
- for(singleExpression) {}
- Iterate enumerable properties in an object
- Use hasOwnProperty to only iterate own properties*/

let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

for (let prop in obj) {
  if (obj.hasOwnProperty(prop))
    console.log("key is:", prop, "value is:", obj[prop]);
}
// Iterators & Iterables
/* The for of loop can be used with any iterable
- An array is an iterable
- a string is an iterable
- arguments
- The default behavior can be overridden
- Some non-iterables can be made iterable, e.g object literals
- An iterator is an object that provides access to a collection of items one at a time, and keeps track of which items have been accessed.
- All iterator contain a next method this method return an object with 2 keys:
                value - the current value of the iterable
                done - true when there are no more values
*/

let mySet1 = new Set(["a", "b", "c"]);
let setEntries = mySet1.entries();
console.log(setEntries.next());
console.log(setEntries.next());
console.log(setEntries.next());
console.log(setEntries.next());
/*Summary: Iterators
- Any object that exposes a next method
- Next method returns object containing current value of collection being iterated
- Just like loops, but we control when the next value is returned
 */

// while Loops
/*while loops continue to execute while a condition remains true
- constructor: while(condition) {} */

let count = 0;

while (count < 5) {
  if (count === 3) break;
  console.log((count += 1));
}

let condition = true;

do {
  console.log("execute once");
  condition = false;
} while (condition);

/*Summary While loops:
- while and do while
- Both execute one or more statements while a condition is true
- Statements in a do while will always be executed at least once
- Statements in a while loop may never be executed
- Use break to exit the loop early
 */

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

// Object.freeze(newObj);
// if (!Object.isFrozen(newObj)) {
//   newObj.prop2 = "oops";
// }
// Object.seal(newObj);
// newObj.prop1 = "new value";
// delete newObj.prop1;

Object.preventExtensions(newObj);
newObj.newProp = "new";

// Summary
/* Available properties and method of the Object constructor
- prototype property is used for inheritance
- keys method returns an arrays of an object`s property keys
- freeze method prevents object being changed
- seal and preventExtensions are less extreme
- Use isFrozen isSealed, and isExtensible to check object states */

// Objects Literals Extensions
let x = "test",
  y = 42;

let obj = {
  x,
  y,
  method: function () {
    return "method";
  },
  [x + y]: "computed",
};
console.log(obj);

let composedObj = Object.assign({}, obj, { someOtherProp: "testing" });
console.log(composedObj);
// Summary
/*Syntactic improvements to object literals
- Shorthand property assignment
- Computed property keys
- Use Object.assign to merge objects
 */

// Working with the OBjects Instances

let myObj = {
  randomProperty: "random",
};
console.log(myObj.constructor);
console.log(myObj.hasOwnProperty("randomProperty"));
console.log(myObj.propertyIsEnumerable("constructor"));
console.log(myObj.toString());

console.log(Object.prototype.toString.call([])); // create array inside object
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
setTimeout(function () {
  console.log("Print this after 2 seconds");
}, 2000);
function X(Y) {
  console.log("I am X");
  Y();
}
X(function Y() {
  console.log("I am Y");
});

const myObj1 = {
  x: "x",
  y: "y",
};

console.log(Object.values(myObj1));
console.log(Object.entries(myObj1));
// Additional Object Methods
// getOwnPropertyDescriptor() - get information about a property
// getOwnPropertyDescriptors() - get information about all properties

console.log(Object.getOwnPropertyDescriptor(myObj1, "x"));
console.log(Object.getOwnPropertyDescriptors(myObj1));

// Summary
/*Object methods
- values(obj) - returns a flat array of all values of obj
- entries(obj) - returns a multidimensional array of keys and values of obj
 - fromEntries(array) - returns an object with keys:values when passed a multidimensional array
 - getOWnPropertyDescriptor(obj, key) - returns the property descriptor for a single property
 - getOwnPropertyDescriptors(obj) - returns the property descriptors for all own properties
 */

//  Getters and Setters
// Special methods that are invoked automatically when a property is accessed or assigned to.
let myObj = {
  otherProp: "other",

  get prop() {
    console.log("accessing prop");
    return this.otherProp;
  },
  set prop(val) {
    console.log("setting other prop to ${val}");
    this.otherProp = val;
  },
};
console.log(myObj.prop);
myObj.prop = "new";
console.log(myObj);
// Summary
/*Getters and Setters
- Special properties that invoke methods when accessed or assigned
- this points to the object they are within */

// Custom types Object

let Person = function (name) {
  this.name = name;
};
Person.prototype = {
  greet() {
    return `Hi, my name is ${this.name}`;
  },
};
let alex = new Person("alex");
console.log(alex.greet());

let kristo = Object.create(Person.prototype, {
  name: { writable: true, value: "kristo" },
});
Object.defineProperty(kristo, "job", {
  value: "Developer",
  writable: false,
  configurable: true,
  enumerable: true,
});
Object.defineProperties(kristo, {
  heightInCm: { value: 185 },
  weightInKg: { value: 85 },
});
console.log(kristo.greet());
console.log(kristo);
// Summary
/* - How to create custom object
   - defineProperty method
   - Property descriptor objects
    defineProperty method */

// The math objects - The Math API
/* - The Math object doesn't have a constructor
   - It is a global static object containing useful properties and methods
 */

console.log(Math.PI);
console.log(Math.E);
console.log(Math.ceil(1, 3));
console.log(Math.floor(3, 9));
console.log(Math.round(4, 4));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5, 6));
console.log(Math.abs(-8));
console.log(Math.sqrt(128));
console.log(Math.pow(3, 2));
console.log(Math.floor(Math.random() * 10));
// Summary
// Covered the properties and methods of the Math Object

// Working with dates and times
/*Date objects must be created using new Date()
 - A date object represents a specific instant in time
 - Dates are the number of milliseconds to have elapsed since 1 january 1970
*/

let now = new Date();
console.log(now);
let partyTime = new Date(946583788000);
console.log(partyTime);
let dob = new Date("june 2 1983");
console.log(dob);

let specialDate = new Date(1983, 2, 6, 1990, 2, 19);
console.log(specialDate);
console.log(specialDate.getDate());
console.log(specialDate.getMonth());
console.log(specialDate.getFullYear());
console.log(specialDate.getUTCDate());
console.log(specialDate.getUTCMonth());
console.log(specialDate.getUTCFullYear());
console.log(specialDate.getDay());
console.log(specialDate.getUTCDay());
console.log(specialDate.toString());
console.log(specialDate.toUTCString());
console.log(specialDate.toDateString());
console.log(specialDate.toTimeString());
console.log(specialDate.toISOString());
console.log(specialDate.toLocaleString());

// Summary
/*Use the Date object to work with dates and times:
- Use the Date() constructor to create date objects
- USe instance methods to get or set parts of the date and time
 */

// Working with the Array Type
/* It used to be difficult to detect an array vs an object
 the typeof operator returns object for both objects and arrays
 We can use Array.isArray() instead */

let obj = {};
let arr = [];
console.log(Array.isArray(obj));
console.log(Array.isArray(arr));

let newArray = Array.from("string");
console.log(newArray);

function logArgs() {
  let args = Array.from(arguments);
  console.log(args);
}
logArgs("a", "b", "c");

let mapObj = {
  1: "one",
  2: "two",
  3: "three",
};
let numArr = [1, 2, 3];
let mappedArray = Array.from(
  numArr,
  function (item) {
    return this[item];
  },
  mapObj
);
console.log(mappedArray);
//  Summary
/* Useful methods of the Array constructor:
- isArray method - returns true if the object passed to it is an array
- from method - create a new array from any iterable ,optional map */

// Function
// The this Object
// Inside a function the value varies depending on how the function is called

(function () {
  "use strict";

  console.log(this);

  let obj = {
    method: function () {
      console.log(this);
    },
  };

  obj.method();

  function Person(name) {
    this.name = name;
  }
  let alex = new Person("alex");
})();

console.log(this);

// Summary
/*Different values for this depending on context
- window in the global context
- undefined inside a function
- The containing object in a method
- Instance when inside a constructor function */

// Working with Functions
/*They contain useful properties and methods fo us to use
 */

(function () {
  "use strict";

  function testFunction(arg1, arg2) {
    return arg1 + arg2;
  }
  console.log(testFunction.length);

  let person = {
    name: "lucas",
    job: "developer",
  };

  function introduce(inductee) {
    console.log(
      `Hey ${inductee} my name is ${this.name}, and I'm a ${this.job}`
    );
  }

  introduce.call(person, "alex");
  introduce.apply(person, ["craig"]);

  function addToCart(price, fee) {
    if (!this.total) {
      this.total = 0;
    }
    this.total += price += fee;
    return `${this.name}s cart total is ${this.total}`;
  }
  let dansCart = addToCart.bind(person, 1);
  console.log(dansCart(50));
  console.log(dansCart(100));
})();
// Summary
/*Properties and methods of functions:
- length property tells us number of named paramters
- cal, apply, and bind methods allow us to set this inside a function
- call accepts comma-separated arguments
- apply accepts array of arguments
- bind binds a function to a context
 */
