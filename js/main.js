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


let mySet = new Set(['a', 'b', 'c']);
let setEntries = mySet.entries();
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
  console.log(count += 1);
}