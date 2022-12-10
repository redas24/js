// Function
// The this Object
// Inside a function the value varies depending on how the function is called

(function(){
  'use strict'

  console.log(this);

  let obj = {
    method: function() {
      console.log(this);

    }
  };

  obj.method();

  function Person(name) {
    this.name = name;
  }
let alex = new Person('alex');
}());

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

(function(){
  'use strict'

function testFunction(arg1, arg2) {
  return arg1 + arg2;
}
console.log(testFunction.length)

let person = {
  name: 'lucas',
  job: 'developer'
}

function introduce(inductee) {
  console.log(`Hey ${inductee} my name is ${this.name}, and I'm a ${this.job}`)
}

introduce.call(person, 'alex' );
introduce.apply(person, ['craig']);
}());
