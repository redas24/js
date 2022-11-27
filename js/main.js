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