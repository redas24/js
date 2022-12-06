//  Getters and Setters
// Special methods that are invoked automatically when a property is accessed or assigned to.
let myObj = {
  otherProp: "other",

  get prop() {
    console.log("accessing prop")
    return this.otherProp
  },
  set prop(val) {
    console.log('setting other prop to ${val}')
    this.otherProp = val

  }
}
console.log(myObj.prop)
myObj.prop = 'new'
console.log(myObj)
// Summary
/*Getters and Setters
- Special properties that invoke methods when accessed or assigned
- this points to the object they are within */

// Custom types Object

let Person = function(name) {
  this.name = name

}
Person.prototype = {
  greet() {
    return `Hi, my name is ${this.name}`
  }
}
let alex = new Person('alex')
console.log(alex.greet())
let john = Object.create(Person.prototype)
console.log(john.greet())
