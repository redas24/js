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
    doeesntExist();
} catch (error) {
  console.log('an error occurred:', error);
}