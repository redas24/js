// var, let, and const

// global scope
let x = 1;
 let y = 2;
  const z = 3;

// local scope
function myFunc() {
    const z = 5;
    console.log(z);


// local scope
 {
    let y = 4;
    console.log(y);
 }
}

myFunc();
