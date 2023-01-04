// Scope
// The global scope is the top-level scope and contains all other scopes
// This window object in a browser
// The global scope is visible to all JavaScript files loaded by a page
(function () {
  let myVar = "test";
  function local() {
    var localVar = "local";
    console.log(myVar, localVar);
  }
  local();
})();
let newArr = [1, 2, 34, 5];
console.log(newArr);

const Obj = new Obj();
console.log(Obj);
const Obj1 = any;
console.log(any);
