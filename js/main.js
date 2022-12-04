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
/*Arrays
- length shows how many elements in the array
- Remove from end or start of array with pop, shift
- Add to end or start of array with push, unshift
- Use splice to add and remove from inside array
- Reverse or sort with reverse, sort
- join converts array to a string
- Use indexOf or lastIndexOf to find an item`s index
- Use slice to get subset of an array  */
setTimeout(function () {
  console.log("Print this after 2 seconds")
}, 2000)
function X(Y) {
  console.log("I am X")
  Y()
}
X(function Y() {
  console.log("I am Y")
})
