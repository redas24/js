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
