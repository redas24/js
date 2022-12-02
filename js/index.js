console.log("Welcome to JS")
const myArray = [];

myArray[0] = "Lucas";
myArray[1] = 1001;
myArray[2] = false;

myArray.push('college')

const newLength = myArray.unshift(44);

myArray.splice(1, 1, 42);
myArray.pop = myArray;
console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1])


// Slice method with arrays
const myArray1 = ["A","B","C","D","E","F"]

const newString = myArray1.join();
myArray1.reverse();

const newArray2 = myArray1.slice(2);

console.log(newArray2);

const myArrayA = ["A","B","C"]
const myArrayB = ["D","E","F"];

const newArray = myArrayA.concat(myArrayB)

console.log(newArray);
let mutt = newArray2;

const person = {
    name: ["Lucas","Cheps"],
    age: 39,
    bio: function() {
        console.log('${this.name[0]} ${this.name[1]}');
    }
}

console.log(person);


document.getElementById("button").onclick = function() {
    document.getElementById("confirm").innerHTML = "Order placed. Check email for confirmation ";
    document.getElementById("button").style.display = "none";
}



let foo = 42; // can reassign can build block scope
foo = 78;
console.log(foo);

//let username = prompt();
//console.log(username);//

const baz = 42; // cant reassign

//Data types , boolean, numbers,integers,string, undefined,null,symbol

let string = "hey";

console.log(string);


let array = [5,'car', true];
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

let subtractionAssignment =1;
subtractionAssignment -= 2;
// Arithmetic operators
// Assignment operators(= += -= *=/=)
// Comparison operators(== === < <= > => != !==)
// Be wary of type-coercion

// Advanced operators part2
// Unary operators - operators with only single operand
let test = {
x: 'x'

};

console.log(test.x);
console.log(true&&true);
console.log(true || true);
let obj = { x:'x', y:'y', z:'z'};
console.log(obj);
// Exponentiation operator
// Logical assignment operators

(function(){

    const num = 2**4
})();
console.log();
//
let a = null;
let b = 1;
console.log(a ??= b);
// Operator Precedence
// Operator associativity(left-to-right, or right-to-left)
// parenthesis () -grouping operator have the presence in the other higher operators.
let precedence = 1 + 4 *2;
let precedence2 = (1 + 4)*2;
let precedence3 =
console.log(precedence);
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
obj.test // type error
obj1?.test //undefined
console.log(obj);
/* Function
  - A function is a named group of expressions
  - A function can be invoked at any time to execute the expressions it contains.
  */

  (function(){
    'use strict';
    function function1(msg, msg2) {
      console.log(msg);
    }
    function1('new message!');
    function1('another message!')

    function logArgs() {
      console.log(arguments);

      return 'some value';
    }
    logArgs('car','boat', 'arguments');

    let f = function f() {}
    f();

    function log(){
      console.log(test);
      var test = 'test';
    }
    log();
  }());


  // Arrays
/* An array is single object which can contain multiple values
Arrays cn be created in multiple ways :
      -We can use the Array constructor
      -We can create array literals
*/


  let myArray = new Array();
  let myArray2 = ['a value','a second value'];
console.log(myArray2);
console.log(myArray);


// Objects
(function() {

  let myObject = {
    car1: 'sport',
    car2: false
  };

  let obj = new Object();

  myObject.car2;
  myObject['car2'];

  myObject.car3 = true;
  myObject['car4'] = 'engine';


  function getThingByColor(color) {
    let things = {
    red:'red things',
    green: 'green things',
    yellow: 'yellow things'
  };
  return things[color] || 'Sorry no thing of that color exists!';
  }
  console.log(getThingByColor('yellow'));
  console.log(getThingByColor('purple'));

  console.log(obj)
}());

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
let myMap = new Map;
let myMap2 = new Map ([['a', 'b'],[1, 2]]);
myMap2.set('c', 3);
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
  console.log('conditions is true');
}

if (true === false) {
console.log('this will be not logged');
} else {
  console.log('this will be logged');
}


let color = 'red';
if  (color === 'blue') {
  console.log('blue');
} else if (color === 'green') {
  console.log('green');
} else {
  console.log(color);
}

if (1) {
  console.log('truthy');
}

let arr =['yes'];
if (arr.length) {
  console.log('array has length');
}

let newArray = ['car','super-car','limousine'];
console.log(newArray);

let newCar = {
  engine: '500horsepowers',
  doors: 5,
  wheels: 4,
  seatbelt: 5,
};
console.log(newCar);
// Ternary operator take 3 operands
(true) ? console.log('truthy') : console.log('falsy');

/* Try Catch
- Used to handle code that could potentially throw errors
- Not syntax errors or typos - operations that may genuinely fail
- Errors stop program execution
- Try catch may allow us to recover from the error
 */

try {
    // something that may result in an error

} catch (error) {
  console.log('an error occurred:', error);
}
// Switch statements
/* Switch:
- Can perform faster than an equivalent if statement
- Some find it more readable
- if is used with Boolean conditions
- Switch can be used with other types
  */

let switcher = 'five';

switch (switcher) {
  case 'one':
    console.log('the value was one');
    break;
  case 'two':
    console.log('the value was two');
    break;
    case 'three':
      console.log('the value was three');
      break;
      default:
        console.log('nothing else matched');
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

let anArray1 = ['one','two', 'three'];

for (const element of anArray1) {
  console.log(element);
}

/* For in loop
- Useful for iterating over the properties of an object
- for(singleExpression) {}
- Iterate enumerable properties in an object
- Use hasOwnProperty to only iterate own properties*/

let obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

for (let prop in obj) {
  if (obj.hasOwnProperty(prop))
  console.log('key is:',prop, 'value is:', obj[prop]);
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


let mySet1 = new Set(['a', 'b', 'c']);
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
  console.log(count += 1);
}

let condition = true;

do {
  console.log('execute once');
  condition = false;
} while (condition);

/*Summary While loops:
- while and do while
- Both execute one or more statements while a condition is true
- Statements in a do while will always be executed at least once
- Statements in a while loop may never be executed
- Use break to exit the loop early
 */