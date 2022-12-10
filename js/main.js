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
