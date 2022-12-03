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

let myObj = {}
console.log(myObj.constructor)
