// Objects Literals Extensions
let x = "test",
  y = 42

let obj = {
  x,
  y,
  method: function () {
    return "method"
  },
  [x + y]: "computed",
}
console.log(obj)

let composedObj = Object.assign({}, obj, { someOtherProp: "testing" })
console.log(composedObj)
// Summary
/*Syntactic improvements to object literals
- Shorthand property assignment
- Computed property keys
- Use Object.assign to merge objects
 */

// Working with the OBjects Instances

let myObj = {
  randomProperty: "random",
}
console.log(myObj.constructor)
console.log(myObj.hasOwnProperty("randomProperty"))
console.log(myObj.propertyIsEnumerable("constructor"))
console.log(myObj.toString())

console.log(Object.prototype.toString.call([])) // create array inside object
// Summary
/*Objects instances
- constructor property
- hasOwnProperty method
- propertyIsEnumerable method
- toString method
  */

// Getters and Setters
