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
*/
// loop constructor: for(expression1; expression2; expression3;) {}

let anArray1 = ['one','two', 'three'];

for (const element of anArray1) {
  console.log(element);
}
